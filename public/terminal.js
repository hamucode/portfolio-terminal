// Terminal initialization
$(document).ready(function () {
  $('#terminal').terminal(
    {
      help: function () {
        this.echo('Available commands:');
        this.echo('  about      - Learn more about me');
        this.echo('  education  - My education background');
        this.echo('  skills     - View my skills');
        this.echo('  contact    - How to reach me');
        this.echo('  clear      - Clear the terminal');
      },

    about: function () {
        this.echo("\n");
        this.echo("👋 Hi! I'm Muhammad, a Computer Science student at Carleton University, passionate about technology and cybersecurity.");
        this.echo("\n");
        this.echo("I'm dedicated to building secure, efficient software and exploring the fascinating world of information security.");
        this.echo("My goal is to contribute to creating safer digital experiences for everyone.");
        this.echo("\n");
        this.echo("🌍 When I’m not studying, I enjoy staying active and creative.");
        this.echo("You can often find me playing soccer, reading, traveling, taking photos, target shooting, or debugging and improving my homelab setup.");
        this.echo("\n");
  },


      education: function () {
        this.echo("\n");
        this.echo("🎓 Education");
        this.echo("  Bachelor of Science in Computer Science: Cybersecurity Stream");
        this.echo("  Carleton University");
        this.echo("  September 2023 - Present (Expected Graduation: July 2027)");
        this.echo("  Ottawa, ON");
        this.echo("\n");
        this.echo("📘 Relevant Courses:");
        this.echo("  - Applied Cryptography and Authentication");
        this.echo("  - Software Development");
        this.echo("  - Systems Programming");
        this.echo("  - Algorithms & Data Structures");
        this.echo("  - Database Management Systems");
        this.echo("\n");
        this.echo("🤝 Extracurricular Activities:");
        this.echo("  - Carleton University Cybersecurity Club Member");
        this.echo("  - Carleton University Muslim Student Association Member");
        this.echo("\n");
      },


   skills: function () {
  this.echo("\n");
  this.echo("💻 Developer Skills:");
  this.echo("  Programming Languages:");
  this.echo("    - Python");
  this.echo("    - Java");
  this.echo("    - C / C++");
  this.echo("    - SQL");
  this.echo("    - JavaScript");
  this.echo("    - HTML & CSS");
  this.echo("\n");
  this.echo("  Tools & Technologies:");
  this.echo("    - Git & Version Control");
  this.echo("    - VS Code");
  this.echo("    - IntelliJ IDEA");
  this.echo("    - Linux/Unix Systems");
  this.echo("    - Windows");
  this.echo("    - macOS");
  this.echo("\n");
  this.echo("🔐 Cybersecurity Skills:");
  this.echo("  Tools:");
  this.echo("    - Wireshark");
  this.echo("    - Nmap");
  this.echo("    - Burp Suite");
  this.echo("    - Ghidra");
  this.echo("    - Splunk");
  this.echo("\n");
  this.echo("  Concepts:");
  this.echo("    - SOC Operations");
  this.echo("    - Vulnerability Assessment");
  this.echo("    - Cryptography");
  this.echo("    - Reverse Engineering");
  this.echo("    - CIA Triad");
  this.echo("    - Threat Intelligence");
  this.echo("    - OSINT");
  this.echo("    - Network Protocols");
  this.echo("\n");
},


      contact: function () {
        this.echo("\n");
        this.echo("📫 Contact Me:");
        this.echo("  - Email: muhammadsalameh@cmail.carleton.ca");
        this.echo("  - LinkedIn: https://linkedin.com/in/muhammad-salameh");
        this.echo("\n");
      },
    },
    {
      greetings: 'Welcome to my portfolio terminal 👋\nType "help" to get started.\n',
      prompt: 'guest@portfolio:~$ ',
      name: 'portfolio_terminal',
      height: 450,
    }
  );
});