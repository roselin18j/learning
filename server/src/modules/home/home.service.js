import Home from "./home.model.js";
import ApiError from "../../utils/ApiError.js";

class HomeService {
  /**
   * Find Home Document
   */
  async findHome() {
    const home = await Home.findOne();

    if (!home) {
      throw new ApiError(404, "Home data not found.");
    }

    return home;
  }

  /**
   * Get Home Page
   */
  async getHome() {
    return await this.findHome();
  }

  /**
   * Create Home (Only Once)
   */
  async createHome() {
    const exists = await Home.findOne();

    if (exists) {
      throw new ApiError(400, "Home document already exists.");
    }

    const home = await Home.create({});

    return home;
  }

  /**
   * Update Hero Settings
   */
  async updateHeroSettings(data) {
    const home = await this.findHome();

    home.hero.autoPlay =
      data.autoPlay ?? home.hero.autoPlay;

    home.hero.autoPlaySpeed =
      data.autoPlaySpeed ?? home.hero.autoPlaySpeed;

    home.hero.showNavigation =
      data.showNavigation ?? home.hero.showNavigation;

    home.hero.showPagination =
      data.showPagination ?? home.hero.showPagination;

    home.hero.isActive =
      data.isActive ?? home.hero.isActive;

    await home.save();

    return home.hero;
  }

  /**
   * Add Hero Slide
   */
async addHeroSlide(slideData) {
  const home = await Home.findOne();

  if (!home) {
    throw new ApiError(404, "Home data not found.");
  }

  if (!home.hero) {
    home.hero = {};
  }

  home.hero.slides.push(slideData);

  await home.save();

  return home;
}

  /**
   * Update Hero Slide
   */
async updateHeroSlide(slideId, data) {

  const home = await this.findHome();

  const slide = home.hero.slides.id(slideId);

  if (!slide) {
    throw new ApiError(404, "Hero slide not found.");
  }

  Object.assign(slide, data);

  home.hero.slides.sort(
    (a, b) => a.order - b.order
  );

  await home.save();

  return slide;
}

  /**
   * Delete Hero Slide
   */
  async deleteHeroSlide(slideId) {
    const home = await this.findHome();

    const slide = home.hero.slides.id(slideId);

    if (!slide) {
      throw new ApiError(404, "Hero slide not found.");
    }

    slide.deleteOne();

    home.hero.slides.sort(
      (a, b) => a.order - b.order
    );

    await home.save();

    return {
      message: "Hero slide deleted successfully.",
    };
  }

  // About section 

async findHome() {
  const home = await Home.findOne();

  if (!home) {
    throw new ApiError(404, "Home data not found.");
  }

  return home;
}

/**
 * Get About Section
 */

async getAboutSection() {

    const home = await this.findHome();

    return home.aboutSection;

}

/**
 * Update About Section
 */
async updateAboutSection(data) {

  const home = await this.findHome();

  // Create about object if it doesn't exist
 if (!home.aboutSection) {
  home.aboutSection = {
    badge: "WHO WE ARE",
    title: "",
    description: "",
    features: [],
    image: {
      url: "",
      publicId: "",
      alt: "About Us",
    },
    isActive: true,
  };
}


 home.aboutSection.badge =
    data.badge ?? home.aboutSection.badge;

  home.aboutSection.title =
    data.title ?? home.aboutSection.title;

  home.aboutSection.description =
    data.description ?? home.aboutSection.description;

  // You forgot this
  if (data.features) {
    home.aboutSection.features = data.features;
  }

  if (data.image) {
    home.aboutSection.image = data.image;
  }

if (data.imageAlt && home.aboutSection.image) {
  home.aboutSection.image.alt = data.imageAlt;
}

  home.aboutSection.isActive =
    data.isActive ?? home.aboutSection.isActive;

  await home.save();

  return home.aboutSection;
}

/**
 * Get Services Section
 */

async getServiceSection() {

  const home = await this.findHome();

  return home.servicesSection;

}

/**
 * Update Services Section
 */
async updateServiceSection(data) {

  const home = await this.findHome();

  if (!home.servicesSection) {

    home.servicesSection = {
      title: "",
      subtitle: "",
      description: "",
      services: [],
      buttonText: "",
      buttonLink: "",
      isActive: true,
    };

  }

  home.servicesSection.title =
    data.title ?? home.servicesSection.title;

  home.servicesSection.subtitle =
    data.subtitle ?? home.servicesSection.subtitle;

  home.servicesSection.description =
    data.description ?? home.servicesSection.description;

  if (data.services) {

    home.servicesSection.services = data.services;

  }

  home.servicesSection.buttonText =
    data.buttonText ?? home.servicesSection.buttonText;

  home.servicesSection.buttonLink =
    data.buttonLink ?? home.servicesSection.buttonLink;

  home.servicesSection.isActive =
    data.isActive ?? home.servicesSection.isActive;

  await home.save();

  return home.servicesSection;

}

}

export default new HomeService();