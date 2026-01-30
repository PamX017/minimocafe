'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, MapPin, Clock, Instagram, Star, ChevronLeft, ChevronRight, Coffee, Leaf } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

// Animation component for scroll-triggered fade-ins
const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function MinimoPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const galleryImages = [
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxjb2ZmZWV8ZW58MHx8fHwxNzY5NzcxOTg1fDA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjb2ZmZWV8ZW58MHx8fHwxNzY5NzcxOTg1fDA&ixlib=rb-4.1.0&q=85',
    'https://images.pexels.com/photos/32391648/pexels-photo-32391648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.unsplash.com/photo-1589698272390-0501a07619bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxtYXRjaGF8ZW58MHx8fHwxNzY5NzcxOTg5fDA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1717603545758-88cc454db69b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxtYXRjaGF8ZW58MHx8fHwxNzY5NzcxOTg5fDA&ixlib=rb-4.1.0&q=85',
    'https://images.pexels.com/photos/5168518/pexels-photo-5168518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.unsplash.com/photo-1631308491952-040f80133535?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtYXRjaGF8ZW58MHx8fHwxNzY5NzcxOTg5fDA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1625225314254-6ddc29a3dd56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2FmZXxlbnwwfHx8fDE3Njk3NzE5OTN8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1635236796520-68dd8df87895?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwY2FmZXxlbnwwfHx8fDE3Njk3NzE5OTN8MA&ixlib=rb-4.1.0&q=85',
    'https://images.pexels.com/photos/33298593/pexels-photo-33298593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600',
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600'
  ]

  const menuItems = {
    ceremonialMatcha: [
      { name: 'Classic Ceremonial Matcha', price: '$6.00', description: 'Traditional whisked matcha, pure & balanced' },
      { name: 'Matcha Latte', price: '$6.50', description: 'Ceremonial grade matcha with steamed oat milk' },
      { name: 'Iced Matcha', price: '$6.00', description: 'Refreshing cold matcha over ice' },
      { name: 'Cinnamon Toast Matcha', price: '$7.00', description: 'Seasonal favorite with warm spices' },
      { name: 'Honey Matcha', price: '$6.75', description: 'Sweetened with local Texas honey' },
    ],
    specialtyCoffee: [
      { name: 'Espresso', price: '$3.50', description: 'Single origin, locally roasted' },
      { name: 'Cappuccino', price: '$4.50', description: 'Classic espresso with velvety microfoam' },
      { name: 'Flat White', price: '$4.75', description: 'Double shot with silky steamed milk' },
      { name: 'Cold Brew', price: '$4.50', description: '16-hour steeped, smooth & rich' },
      { name: 'Pour Over', price: '$5.00', description: 'Slow-brewed single origin' },
    ],
    localTreats: [
      { name: 'Almond Croissant', price: '$4.50', description: 'Freshly baked, flaky & buttery' },
      { name: 'Matcha Cookie', price: '$3.50', description: 'House-made with ceremonial matcha' },
      { name: 'Seasonal Pastry', price: '$4.00', description: 'Rotating selection from local bakery' },
    ]
  }

  const reviews = [
    {
      name: 'Dominique H.',
      rating: 5,
      text: 'Super tasty coffee truck with amazing matcha options! The balance is perfect - not too sweet but not bland. A must-visit in downtown Austin.',
      date: 'November 2024'
    },
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'The cinnamon toast matcha is incredible! Love the minimalist vibe and the friendly service. My go-to spot for my morning matcha fix.',
      date: 'December 2024'
    },
    {
      name: 'James K.',
      rating: 5,
      text: 'Best ceremonial matcha in Austin, hands down. The quality is outstanding and you can really taste the difference. Dog-friendly too!',
      date: 'October 2024'
    },
    {
      name: 'Emily R.',
      rating: 5,
      text: 'Hidden gem in downtown! The aesthetic is so calming and the coffee is expertly crafted. Highly recommend the flat white.',
      date: 'January 2025'
    },
    {
      name: 'Michael T.',
      rating: 5,
      text: 'Great community vibe and consistently excellent drinks. The pour over is fantastic. Love supporting local!',
      date: 'December 2024'
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">MINIMO</h1>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('story')} className="text-sm font-medium hover:text-primary transition-colors">Our Story</button>
            <button onClick={() => scrollToSection('menu')} className="text-sm font-medium hover:text-primary transition-colors">Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('location')} className="text-sm font-medium hover:text-primary transition-colors">Visit</button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/33298593/pexels-photo-33298593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Matcha Latte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">Minimo</h2>
            <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-primary">Coffee & Matcha</h3>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-foreground/80">Ceremonial matcha and craft coffee, thoughtfully served in the heart of Austin</p>
            <Button
              size="lg"
              onClick={() => scrollToSection('location')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Find Our Cafe
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <FadeInSection delay={0.2}>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground/90">
                  Nestled in downtown Austin at <span className="font-semibold text-primary">508 West Ave</span>, Minimo Coffee & Matcha is a specialty destination for those who appreciate the finer details.
                </p>
                <p className="text-foreground/90">
                  We're more than just a coffee truck—we're a <span className="font-semibold">hidden gem</span> in the heart of the city, serving <span className="font-semibold">high-quality ceremonial matcha</span> and expertly crafted coffee in a serene, minimalist setting.
                </p>
                <p className="text-foreground/90">
                  Our philosophy is simple: <span className="italic">less is more</span>. Every cup is prepared with intention, using only the finest ingredients and time-honored techniques. We believe in the art of slow living and bringing that mindfulness to each drink we serve.
                </p>
                <p className="text-foreground/90">
                  <span className="font-semibold text-primary">Dog-friendly and community-focused</span>, we've created a welcoming space where neighbors become friends, and every visit feels like coming home. Whether you're here for our signature cinnamon toast matcha or a perfectly balanced pour over, we're here to make your day a little brighter.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-8 rounded-lg text-center">
                  <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-2xl mb-2">Ceremonial</h3>
                  <p className="text-sm text-muted-foreground">Grade Matcha</p>
                </div>
                <div className="bg-secondary/10 p-8 rounded-lg text-center">
                  <Coffee className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-2xl mb-2">Craft</h3>
                  <p className="text-sm text-muted-foreground">Coffee</p>
                </div>
                <div className="col-span-2 bg-accent/10 p-6 rounded-lg text-center">
                  <p className="text-xl font-light italic">"Less is more"</p>
                  <p className="text-sm text-muted-foreground mt-2">Our minimalist philosophy</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-4">Our Menu</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground text-lg">Crafted with care, served with intention</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Ceremonial Matcha */}
            <FadeInSection delay={0.1}>
              <div className="space-y-8">
                <div className="text-center">
                  <Leaf className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-primary">Ceremonial Matcha</h3>
                  <p className="text-sm text-muted-foreground">Traditional Japanese grade</p>
                </div>
                <div className="space-y-6">
                  {menuItems.ceremonialMatcha.map((item, idx) => (
                    <div key={idx} className="border-b border-border pb-4 hover:bg-accent/5 transition-colors rounded-lg p-3 -m-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="text-primary font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Specialty Coffee */}
            <FadeInSection delay={0.3}>
              <div className="space-y-8">
                <div className="text-center">
                  <Coffee className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-secondary">Specialty Coffee</h3>
                  <p className="text-sm text-muted-foreground">Expertly crafted brews</p>
                </div>
                <div className="space-y-6">
                  {menuItems.specialtyCoffee.map((item, idx) => (
                    <div key={idx} className="border-b border-border pb-4 hover:bg-accent/5 transition-colors rounded-lg p-3 -m-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="text-secondary font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Local Treats */}
            <FadeInSection delay={0.5}>
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🥐</div>
                  <h3 className="text-2xl font-semibold mb-2 text-accent">Local Treats</h3>
                  <p className="text-sm text-muted-foreground">Freshly baked daily</p>
                </div>
                <div className="space-y-6">
                  {menuItems.localTreats.map((item, idx) => (
                    <div key={idx} className="border-b border-border pb-4 hover:bg-accent/5 transition-colors rounded-lg p-3 -m-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="text-accent font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section id="gallery" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Instagram className="h-6 w-6 text-primary" />
                <h2 className="text-4xl md:text-5xl font-light">Our Aesthetic</h2>
              </div>
              <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Follow us <a href="https://www.instagram.com/minimomatcha/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@minimomatcha</a></p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square overflow-hidden rounded-sm cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-4">Community Favorites</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground text-lg">What our neighbors are saying</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-card rounded-2xl shadow-lg p-8 md:p-12">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-light text-center mb-6 italic">"{reviews[currentReview].text}"</p>
                  <div className="text-center">
                    <p className="font-semibold text-lg">{reviews[currentReview].name}</p>
                    <p className="text-sm text-muted-foreground">{reviews[currentReview].date}</p>
                  </div>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevReview}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <div className="flex items-center gap-2">
                    {reviews.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentReview(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentReview ? 'w-8 bg-primary' : 'w-2 bg-border'
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextReview}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Location & Hours Footer */}
      <section id="location" className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light mb-4">Visit Us</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Location */}
              <FadeInSection delay={0.2}>
                <div className="text-center md:text-left">
                  <div className="flex items-start gap-4 justify-center md:justify-start mb-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Location</h3>
                      <p className="text-lg leading-relaxed">
                        508 West Ave<br />
                        Austin, TX 78701<br />
                        <span className="text-muted-foreground text-sm">Downtown Austin</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-3 italic">Paid parking available nearby</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Hours */}
              <FadeInSection delay={0.4}>
                <div className="text-center md:text-left">
                  <div className="flex items-start gap-4 justify-center md:justify-start mb-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Hours</h3>
                      <div className="space-y-2 text-base">
                        <p><span className="font-medium">Monday:</span> Closed</p>
                        <p><span className="font-medium">Tuesday - Wednesday:</span> 9:00 AM - 3:00 PM</p>
                        <p><span className="font-medium">Thursday - Saturday:</span> 9:00 AM - 4:00 PM</p>
                        <p><span className="font-medium">Sunday:</span> 10:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Google Map Embed */}
            <FadeInSection delay={0.6}>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.7837458923576!2d-97.75331132394468!3d30.270067706975955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b552cff88ef1%3A0x4d00fc83b4259159!2sMinimo%20Coffee%20%26%20Matcha!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Minimo Coffee & Matcha Location"
                ></iframe>
              </div>
            </FadeInSection>

            {/* Social & Contact */}
            <FadeInSection delay={0.8}>
              <div className="mt-16 text-center">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <a 
                    href="https://www.instagram.com/minimomatcha/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-7 w-7" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Dog-friendly • Community-focused • Minimalist aesthetic</p>
                <p className="text-sm text-muted-foreground">© 2025 Minimo Coffee & Matcha. Crafted with care in Austin, TX.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}