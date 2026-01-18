# Supriya Baride - AI Engineer Portfolio

A modern, glassmorphism-style portfolio website built with React.js, featuring smooth animations powered by Framer Motion.

## 🚀 Features

- **Glassmorphism Design**: Modern, translucent glass-effect UI
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Fully responsive across all devices
- **Smooth Navigation**: Fixed navigation bar with active section highlighting
- **Vercel Ready**: Pre-configured for easy deployment on Vercel

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg (add your profile image here)
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Certifications.js
│   │   ├── Skills.js
│   │   └── Contact.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
└── vercel.json
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile image:
   - Place your profile image in `public/images/profile.jpg`
   - Recommended size: 400x400px or larger (square format)

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect the React app and deploy it

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `src/styles/App.css` (--primary-gradient, --glass-bg, etc.)
- **Content**: Update component files in `src/components/`
- **Animations**: Modify Framer Motion props in each component

## 📝 Sections

- **Hero**: Introduction with profile image
- **About**: Personal background and interests
- **Education**: Academic qualifications
- **Experience**: Work experience and internships
- **Projects**: Featured projects with details
- **Certifications**: Certifications and awards
- **Skills**: Technical and soft skills
- **Contact**: Contact information and links

## 🛠️ Technologies Used

- React.js
- Framer Motion
- CSS3 (Glassmorphism)
- HTML5

## 📄 License

This project is private and personal.

---

Built with ❤️ by Supriya Baride
