import ServicePage from "./service.model.js";
import ApiError from "../../utils/ApiError.js";

class ServiceService {

  /**
   * Find Service Page
   * If not found, create default document.
   */
  async findServicePage() {

    let servicePage = await ServicePage.findOne();

    if (!servicePage) {

      servicePage = await ServicePage.create({
        serviceSection: {
          header: {
            badge: "Our Services",
            title: "Programs That Create Lasting Community Impact",
            description:
              "Every initiative is thoughtfully designed to address real community needs with compassion, responsibility and complete transparency.",
          },
          services: [],
        },
      });

    }

    return servicePage;

  }

  /**
   * Get Service Page
   */
  async getServicePage() {

    return await this.findServicePage();

  }

  /**
   * Create Service Page (Only Once)
   */
  async createServicePage() {

    const exists = await ServicePage.findOne();

    if (exists) {
      throw new ApiError(400, "Service page already exists.");
    }

    const servicePage = await ServicePage.create({
      serviceSection: {
        header: {
          badge: "Our Services",
          title: "Programs That Create Lasting Community Impact",
          description:
            "Every initiative is thoughtfully designed to address real community needs with compassion, responsibility and complete transparency.",
        },
        services: [],
      },
    });

    return servicePage;

  }

  /**
   * Update Service Header
   */
  async updateServiceHeader(data) {

    const servicePage = await this.findServicePage();

    servicePage.serviceSection.header.badge =
      data.badge ?? servicePage.serviceSection.header.badge;

    servicePage.serviceSection.header.title =
      data.title ?? servicePage.serviceSection.header.title;

    servicePage.serviceSection.header.description =
      data.description ?? servicePage.serviceSection.header.description;

    await servicePage.save();

    return servicePage.serviceSection.header;

  }

  /**
   * Add Service
   */
  async addService(data) {

    const servicePage = await this.findServicePage();

    servicePage.serviceSection.services.push(data);

    await servicePage.save();

    return servicePage;

  }

  /**
   * Update Service
   */
  async updateService(serviceId, data) {

    const servicePage = await this.findServicePage();

    const service =
      servicePage.serviceSection.services.id(serviceId);

    if (!service) {
      throw new ApiError(404, "Service not found.");
    }

    Object.assign(service, data);

    await servicePage.save();

    return service;

  }

  /**
   * Delete Service
   */
  async deleteService(serviceId) {

    const servicePage = await this.findServicePage();

    const service =
      servicePage.serviceSection.services.id(serviceId);

    if (!service) {
      throw new ApiError(404, "Service not found.");
    }

    service.deleteOne();

    await servicePage.save();

    return {
      message: "Service deleted successfully.",
    };

  }

}

export default new ServiceService();