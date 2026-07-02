<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import OtherWork from './components/OtherWork.vue';
import Services from './components/Services.vue';
import Education from './components/Education.vue';
import ResumeDownload from './components/ResumeDownload.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <OtherWork />
    <Services />
    <Education />
    <ResumeDownload />
    <Contact />
  </main>
  <Footer />
</template>
