class formService {
  constructor() {}

  sendForm = (alertSucess, alertError, { name, email }) => {
    fetch(SERVER_URL, {
      method: 'post',
      body: JSON.stringify({ name, email }),
    }).then((response) =>
      response.status == 200 ? alertSucess() : alertError(response.status)
    );
  };
}
