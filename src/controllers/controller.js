class controller {
  constructor(formService, landingView) {
    landingView.addHandlerToSubmit(formService.sendForm);
  }
}
