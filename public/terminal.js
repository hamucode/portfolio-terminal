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
        this.echo("Hi! I'm Muhammad, a Computer Science student @ Carleton University,");
        this.echo("passionate about technology and cybersecurity.");
        this.echo("\n");
      },

      education: function () {
        this.echo("\n");
        this.echo("🎓 Education:");
        this.echo("  - B.Sc. in Computer Science, Carleton University");
        this.echo("    Focus: Cybersecurity and software development fundamentals");
        this.echo("  - Relevant Courses: Cryptography, Software Dev, Network Security, Algorithms");
        this.echo("\n");
      },

      skills: function () {
        this.echo("\n");
        this.echo("💻 Developer Skills:");
        this.echo("  - Languages: Java, Python, C, C++, JavaScript, HTML, CSS");
        this.echo("  - Tools: Git, VS Code, Linux");
        this.echo("\n");
        this.echo("🔐 Cybersecurity Skills:");
        this.echo("  - Encryption & Hashing: AES, SHA, salts, MACs, digital signatures");
        this.echo("  - Password cracking & brute-force analysis");
        this.echo("  - Security protocols, authentication systems, cryptographic libraries");
        this.echo("  - Risk assessment & secure coding principles");
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