<script setup lang="ts">
import { reactive, ref } from 'vue';
import SectionTitle from './SectionTitle.vue';
import { profile } from '../data/profile';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive<Record<string, string>>({});
const submitted = ref(false);
const mailtoHref = ref('');

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Name is required.';
  errors.email = form.email.trim() ? (isValidEmail(form.email) ? '' : 'Enter a valid email address.') : 'Email is required.';
  errors.subject = form.subject.trim() ? '' : 'Subject is required.';
  errors.message = form.message.trim().length >= 12 ? '' : 'Message must be at least 12 characters.';

  return !Object.values(errors).some(Boolean);
};

const submitForm = () => {
  submitted.value = false;
  if (!validate()) return;

  const emailBody = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    '',
    form.message.trim(),
  ].join('\n');

  mailtoHref.value = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(emailBody)}`;

  // Connect this submit handler later to a Laravel backend API, EmailJS, Formspree, Resend, or an SMTP service.
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
  submitted.value = true;
};
</script>

<template>
  <section id="contact" class="section">
    <div class="container narrow-section grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk about practical web work"
          description="For jobs, freelance work, collaboration, or portfolio-related communication."
        />
        <div class="mt-8 grid gap-4">
          <a :href="`mailto:${profile.email}`" class="contact-link">
            <span>Email</span>
            <strong>{{ profile.email }}</strong>
          </a>
          <a :href="`tel:${profile.phone}`" class="contact-link">
            <span>Phone</span>
            <strong>{{ profile.phone }}</strong>
          </a>
          <a :href="profile.linkedin" class="contact-link" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>View profile</strong>
          </a>
          <div class="contact-link">
            <span>Location</span>
            <strong>{{ profile.location }}</strong>
          </div>
        </div>
      </div>

      <form class="contact-form" novalidate @submit.prevent="submitForm">
        <div v-if="submitted" class="success-message" role="status">
          Thanks for reaching out. Please send the prepared email draft to complete your message.
          <a v-if="mailtoHref" :href="mailtoHref" class="success-link">Open email draft</a>
        </div>

        <div class="form-grid">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" v-model="form.name" type="text" autocomplete="name" :aria-invalid="Boolean(errors.name)" />
            <p v-if="errors.name" class="field-error">{{ errors.name }}</p>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" autocomplete="email" :aria-invalid="Boolean(errors.email)" />
            <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
          </div>
        </div>
        <div class="field">
          <label for="subject">Subject</label>
          <input id="subject" v-model="form.subject" type="text" :aria-invalid="Boolean(errors.subject)" />
          <p v-if="errors.subject" class="field-error">{{ errors.subject }}</p>
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="6" :aria-invalid="Boolean(errors.message)"></textarea>
          <p v-if="errors.message" class="field-error">{{ errors.message }}</p>
        </div>
        <button type="submit" class="btn btn-primary w-full sm:w-auto">Send Message</button>
      </form>
    </div>
  </section>
</template>
