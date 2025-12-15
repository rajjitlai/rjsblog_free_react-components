import { Instagram, Send, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Categories',
      links: [
        { name: 'Physics', href: 'https://rjsblog.in/category/physics' },
        { name: 'English', href: 'https://rjsblog.in/category/english' },
        { name: 'Chemistry', href: 'https://rjsblog.in/category/chemistry' },
        { name: 'Updates', href: 'https://rjsblog.in/category/updates' },
        { name: 'View all', href: 'https://rjsblog.in/categories' },
      ],
    },
    {
      title: 'Useful Links',
      links: [
        { name: 'Home', href: 'https://rjsblog.in/' },
        { name: 'Blog', href: 'https://rjsblog.in/blogs' },
        { name: 'Author', href: 'https://rjsblog.in/author' },
        { name: 'Notes', href: 'https://rjsblog.in/notes' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'Contact us', href: 'https://rjsblog.in/contact' },
        { name: 'Privacy Policy', href: 'https://rjsblog.in/privacy-policy' },
        { name: 'Terms & Conditions', href: 'https://rjsblog.in/terms-&-conditions' },
        { name: 'Cookie Policy', href: 'https://rjsblog.in/cookie-policy' },
        { name: 'Disclaimer', href: 'https://rjsblog.in/disclaimer' },
        { name: 'DMCA Policy', href: 'https://rjsblog.in/dmca-policy' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <a href="https://rjsblog.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg text-foreground">
                RJ's BLOG<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              RJ's BLOG is a platform that connects individuals with the latest and greatest knowledge in the tech industry.
            </p>
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-foreground mb-3">Follow us on social networks</h5>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/rjinstitute.rajjit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://telegram.me/rjinstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100087904707580&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2vlwt6mQUvrBiNxxATwqWA?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm transition-colors ${link.name === 'View all'
                          ? 'text-accent hover:text-accent/80'
                          : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-2">
            <p className="text-sm text-muted-foreground">
              ©2023-{currentYear} RJ's BLOG. | All rights reserved
            </p>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Owner: <a href="https://rajjitlaishram.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Rajjit Laishram</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;