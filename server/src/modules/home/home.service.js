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
}

export default new HomeService();