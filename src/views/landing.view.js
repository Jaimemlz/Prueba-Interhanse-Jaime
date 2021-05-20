class landingView {
  alertSucess = () => {
    alert('SUCESS');
  };

  alertError = (status) => {
    alert('ERROR STATUS ' + status);
  };

  addHandlerToSubmit = (sendForm) => {
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    document
      .getElementById('btnSend')
      .addEventListener('click', () =>
        sendForm(this.alertSucess, this.alertError, { name, email })
      );
  };
}
