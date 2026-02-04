class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  async sendForm(event) {
    event.preventDefault();

    try {
      const formData = new FormData(this.form);

      const response = await fetch(this.form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        this.displaySuccess();
      } else {
        this.displayError();
      }
    } catch (error) {
      this.displayError();
      console.error(error);
    }
  }

  init() {
    if (this.form) {
      this.form.addEventListener("submit", this.sendForm);
    }
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  success: "<div class='alert alert-success'>Message Sended</div>",
  error: "<div class='alert alert-danger'>Error</div>",
});

formSubmit.init();
