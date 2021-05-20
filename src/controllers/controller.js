class controller {
  constructor(formService, landingView) {
    landingView.addHandlerToSubmit(formService.sendForm);
    landingView.carouselImages(images);
    landingView.setHrefonClick();
    landingView.carouselMobile();
  }
}
