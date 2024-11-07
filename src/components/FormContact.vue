<script setup>
import { useToggleStore } from "@/stores/toggle";
const toggle = useToggleStore();
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
    errors.name = "Por favor ingrese su nombre";
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = "Por favor ingrese su email";
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = "Por favor ingrese un email válido";
    isValid = false;
  }

  if (!formData.subject.trim()) {
    errors.subject = "Por favor ingrese el asunto";
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = "Por favor ingrese su mensaje";
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
  <div :class="{ 'dark-shadow': toggle.Theme }" class="container">
    <h2>Formulario de Contacto</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nombre:</label>
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
        <label for="email">Email:</label>
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
        <label for="subject">Asunto:</label>
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
        <label for="message">Mensaje:</label>
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
        {{ loading ? "Enviando..." : "Enviar Mensaje" }}
      </button>
    </form>

    <div class="success-message" v-if="showSuccess">
      ¡Mensaje enviado con éxito!
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  font-size: 1.6rem;
}
.dark-shadow {
  box-shadow: 0 0 5px 15px rgba(255, 255, 255, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.5rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.2);
}

input.invalid,
textarea.invalid {
  border-color: #ff0000;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1.5rem;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error {
  color: #ff0000;
  font-size: 1.3rem;
  margin-top: 0.2rem;
}

.success-message {
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
}
</style>
