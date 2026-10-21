import EventPage from "./event.model.js";
import ApiError from "../../utils/ApiError.js";

class EventService {
  /**
   * Find Event Page
   * If not found, create default document.
   */
  async findEventPage() {
    let eventPage = await EventPage.findOne();

    if (!eventPage) {
      eventPage = await EventPage.create({
        eventSection: {
          header: {
            badge: "Our Events",
            title: "Programs That Create Lasting Community Impact",
            description:
              "Every initiative is thoughtfully designed to address real community needs with compassion, responsibility and complete transparency.",
          },
          events: [],
        },
      });
    }

    return eventPage;
  }

  /**
   * Get Event Page
   */
  async getEventPage() {
    return await this.findEventPage();
  }

  /**
   * Create Event Page (Only Once)
   */
  async createEventPage() {
    const exists = await EventPage.findOne();

    if (exists) {
      throw new ApiError(400, "Event page already exists.");
    }

    const eventPage = await EventPage.create({
      eventSection: {
        header: {
          badge: "Our Events",
          title: "Programs That Create Lasting Community Impact",
          description:
            "Every initiative is thoughtfully designed to address real community needs with compassion, responsibility and complete transparency.",
        },
        events: [],
      },
    });

    return eventPage;
  }

  /**
   * Update Event Header
   */
  async updateEventHeader(data) {
    const eventPage = await this.findEventPage();

    eventPage.eventSection.header.badge =
      data.badge ?? eventPage.eventSection.header.badge;

    eventPage.eventSection.header.title =
      data.title ?? eventPage.eventSection.header.title;

    eventPage.eventSection.header.description =
      data.description ?? eventPage.eventSection.header.description;

    await eventPage.save();

    return eventPage.eventSection.header;
  }

  /**
   * Add Event
   */
  async addEvent(data) {
    const eventPage = await this.findEventPage();

    eventPage.eventSection.events.push(data);

    await eventPage.save();

    return eventPage;
  }

  /**
   * Update Event
   */
  async updateEvent(eventId, data) {
    const eventPage = await this.findEventPage();

    const event = eventPage.eventSection.events.id(eventId);

    if (!event) {
      throw new ApiError(404, "Event not found.");
    }

    Object.assign(event, data);

    await eventPage.save();

    return event;
  }

  /**
   * Delete Event
   */
  async deleteEvent(eventId) {
    const eventPage = await this.findEventPage();

    const event = eventPage.eventSection.events.id(eventId);

    if (!event) {
      throw new ApiError(404, "Event not found.");
    }

    event.deleteOne();

    await eventPage.save();

    return {
      message: "Event deleted successfully.",
    };
  }

  async getEventBySlug(slug) {

    const eventPage = await this.findEventPage();

    const event = eventPage.eventSection.events.find(
        (item) => item.slug === slug
    );

    if (!event) {
        throw new ApiError(404, "Event not found.");
    }

    return event;
}
  
}

export default new EventService();