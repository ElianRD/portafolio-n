<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref, reactive } from "vue";
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const showSuccess = ref(false);

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = () => {
  let isValid = true;

  // Resetear errores
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  if (!formData.name.trim()) {
    errors.name = t("form.errName");
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = t("form.errEmail");
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = t("form.errEmailValid");
    isValid = false;
  }

  if (!formData.subject.trim()) {
    errors.subject = t("form.errSubject");
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = t("form.errMessage");
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  loading.value = true;

  try {
    // Aquí iría la llamada a tu API para enviar el email
    // Por ejemplo:
    // await axios.post('/api/send-email', formData)

    // Simulamos un delay para demostración
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Resetear formulario
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });

    // Mostrar mensaje de éxito
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);
  } catch (error) {
    console.error("Error al enviar el email:", error);
    // Aquí podrías manejar los errores de la API
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="contact-form__card">
    <h2 class="contact-form__heading">{{ t("form.title") }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">{{ t("form.name") }}</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          :class="{ invalid: errors.name }"
        />
        <div class="error" v-if="errors.name">
          {{ errors.name }}
        </div>
      </div>

      <div class="form-group">
        <label for="email">{{ t("form.email") }}</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          :class="{ invalid: errors.email }"
        />
        <div class="error" v-if="errors.email">
          {{ errors.email }}
        </div>
      </div>

      <div class="form-group">
        <label for="subject">{{ t("form.subject") }}</label>
        <input
          type="text"
          id="subject"
          v-model="formData.subject"
          :class="{ invalid: errors.subject }"
        />
        <div class="error" v-if="errors.subject">
          {{ errors.subject }}
        </div>
      </div>

      <div class="form-group">
        <label for="message">{{ t("form.message") }}</label>
        <textarea
          id="message"
          v-model="formData.message"
          :class="{ invalid: errors.message }"
        ></textarea>
        <div class="error" v-if="errors.message">
          {{ errors.message }}
        </div>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? t("form.sending") : t("form.send") }}
      </button>
    </form>

    <div class="success-message" v-if="showSuccess">
      {{ t("form.success") }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-form__card {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid $hairline;
  border-radius: 16px;
  padding: 30px;
}

.contact-form__heading {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  letter-spacing: -0.5px;
  margin: 0 0 22px;
  color: inherit;
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $muted;
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(233, 238, 240, 0.14);
  border-radius: 10px;
  color: $ink;
  font-family: inherit;
  font-size: 1.5rem;
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
}

input::placeholder,
textarea::placeholder {
  color: #6b747a;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: $primary-color;
  box-shadow: 0 0 0 3px rgba(47, 214, 196, 0.15);
}

input.invalid,
textarea.invalid {
  border-color: #ff6b6b;
}

textarea {
  min-height: 140px;
  resize: vertical;
}

button {
  width: 100%;
  margin-top: 6px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: $primary-color;
  color: $backgound-black;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  transition: filter 0.25s, transform 0.1s;
}

button:hover:not(:disabled) {
  filter: brightness(1.08);
}
button:active:not(:disabled) {
  transform: translateY(1px);
}
button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.error {
  color: #ff6b6b;
  font-size: 1.25rem;
  margin-top: 6px;
}

.success-message {
  margin-top: 16px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(47, 214, 196, 0.12);
  border: 1px solid rgba(47, 214, 196, 0.4);
  color: $primary-color;
  font-weight: 600;
  text-align: center;
}

/* Modo claro: los tokens base ($ink, bordes claros) son para fondo oscuro. */
.app-shell:not(.dark) .contact-form__card {
  background: #ffffff;
  border-color: rgba(7, 9, 15, 0.1);
  box-shadow: 0 12px 34px rgba(7, 9, 15, 0.07);
}
.app-shell:not(.dark) label {
  color: #52606d;
}
.app-shell:not(.dark) input,
.app-shell:not(.dark) textarea {
  background: #f7f9fa;
  border-color: rgba(7, 9, 15, 0.14);
  color: $backgound-black;
}
.app-shell:not(.dark) input::placeholder,
.app-shell:not(.dark) textarea::placeholder {
  color: #9aa6ab;
}
.app-shell:not(.dark) .success-message {
  color: $primary-dark;
}
</style>
