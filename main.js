import 'style.css'

document.querySelector('#app').innerHTML = `
<header class="header">
<img src="/images/header-logo.png" alt="My Arte Lab Logo" class="header-logo">
<a href="mailto:contact@myartelab.com"><button class="contact-button">Contact</button></a>
</header>

<!-- Main Section -->
<main>
<section class="hero">
    <div class="left-content">
        <div class="phone-images-container">
            <div class="colored-container first"></div>
            <div class="colored-container second"></div>
            <img src="images/phone_image.png" alt="Phone Images" class="phone-images">
        </div>
    </div>
    <div class="right-content">
        <h1><span>Empowering</span> your creative journey. An all inclusive platform.</h1>
        <p>Welcome to MyArteLab, a specialized all-inclusive mobile app social networking platform for content creators. Our platform leverages advanced technologies to provide content creators with tools and services that outshine any existing social networking platform.</p>
        <div><button class="waitlist-button" onclick="window.location.href = 'https://forms.gle/rYJDYXyjZBKrXvgM9';">Join the waitlist</button></div>
        <img src="/images/user-icons.png" alt="User Icons" class="user-icons">
    </div>
</section>

<section class="additional-content">
    <div class="left-content">
        <h2>Who is MyArteLab for</h2>
        <p>Whether you are a fan, an industry professional, or an organization looking to support or collaborate, MyArteLab is for anyone passionate about creativity. Engage with the vibrant world of digital artistry, create content, and support creators.
        </p>
        <button class="waitlist-button" onclick="window.location.href = 'https://forms.gle/rYJDYXyjZBKrXvgM9';">Join the waitlist</button>
    </div>
    <div class="right-content">
        <img src="/images/Frame1.png" alt="Phone image">
    </div>
</section>
</main>

<!-- Footer Section -->
<footer>
  <div class="footer-divider"></div>
  <div class="social-icons">
        <a href="https://www.linkedin.com/company/myartelab/" target="_blank"><img src="/images/linkedin_icon.png" alt="LinkedIn"></a>
        <a href="https://x.com/myartelab" target="_blank"><img src="/images/x_icon.png" alt="X Twitter"></a>
        <a href="https://www.instagram.com/myartelab_?igsh=Ymt6aW5pdzA5czkw" target="_blank"><img src="/images/instagram_icon.png" alt="Instagram"></a>
        <!-- Add more social icons as needed -->
    </div>
  <p>&copy; COPYRIGHT - Myarte lab 2024</p>
</footer>
`
