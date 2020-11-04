
const langs = {
    ptBr: {
        messages: {
            emailCopied: "Email copiado!"
        },
        home: {
            title: "Home"
        },
        about: {
            title: "Sobre",
            content: [
                "*Carioca morando na terra da garoa.* Meu trabalho atualmente consiste de um papel full time como Consultor Desenvolvedor na ThoughtWorks, Mentor de Programação na Aceleradora Ágil e Desenvolvedor Web Freelance. Poder trabalhar em todas essas frentes é muito enriquecedor para mim como desenvolvedor pois me traz muita experiência em diversas ferramentas tecnológicas e áreas de negócio.",
                "Em 2019 consegui meu primeiro estágio como Desenvolvedor Frontend trabalhando com Angular diariamente. Hoje em dia tenho me dedicado ao React, React Native e Node para criar os produtos web de meus clientes.",
                "Caso esteja em busca de um desenvolvedor para construir o site, sistema ou aplicativo do seu negócio, me manda uma mensagem! Vamos trabalhar juntos ;)"
            ]
        },
        blog: {},
        hero: {
            "greeting": "Oi, meu nome é",
            "name": "Matheus",
            "content": "Sou Desenvolvedor Web, também atuo como Designer Gráfico, e dou aulas de programação."
        },
        navLinks: {
            "home": "Home",
            "portfolio": "Portfólio",
            "blog": "Blog",
            "about": "Sobre"
        },
        portfolio: {
            "title": "Portfólio",
            "development": {
                "title": "Desenvolvimento",
                "projects": [
                    {
                        "title": "Sistema de Pedidos da Plasser",
                        "description": "Sistema web usado pelos clientes da Plasser como forma de monitorar o status de seus pedidos. Todos os dados do sistema são preenchidos e atualizados por meio de planilhas exportadas pelo sistema principal da empresa.",
                        "itemsTitle": "Development tools",
                        "items": ["NodeJS", "NestJS", "NextJS (React)", "TypeORM", "MySQL", "Typescript", "ExcelJS"],
                        "links": [
                            {
                                "title": "Deployed website",
                                "url": "https://sistema-dados-ui.vercel.app"
                            },
                            {
                                "title": "Código UI",
                                "url": "https://github.com/mbernardes19/sistema-dados-ui"
                            },
                            {
                                "title": "Código API",
                                "url": "https://github.com/mbernardes19/sistema-dados-api"
                            }
                        ],
                        "hasGif": false,
                        "gif": ""
                    },
                    {
                        "title": "Bot Método Sempre Rico",
                        "description": "Bot de Telegram desenvolvido para o curso 'Método Sempre Rico'. Uma das funções do bot é confirmar que a compra do usuário foi finalizada com sucesso, armazenar seus dados e dar acesso aos canais privados do curso. A outra função é a de enviar relatórios diários sobre os usuários do curso por email, e fazer checagens mensais nos canais para banir usuários inadimplentes.",
                        "itemsTitle": "Ferramentas de desenvolvimento",
                        "items": ["Node", "TelegrafJS", "Telegram Bot API", "Cron Jobs", "Nodemailer", "MySQL", "Serviço de Hospedagem KingHost"],
                        "links": [
                            {
                                "title": "Bot em produção",
                                "url": "https://t.me/metodo_sempre_rico"
                            },
                            {
                                "title": "Código fonte",
                                "url": "https://github.com/mbernardes19/metodo-semprerico-bot"
                            }
                        ],
                        "hasGif": true,
                        "gif": "../../images/dev-telegram-bot.gif"
                    },
                    {
                        "title": "Beer Bank",
                        "description": "UI desenvolvida para mostrar e encontrar informações sobre cervejas vindas da PunkAPI.",
                        "itemsTitle": "Ferramentas de desenvolvimento",
                        "items": ["React", "Material UI", "Fetch API", "Local Storage API", "GitHub Pages"],
                        "links": [
                            {
                                "title": "Site em produção",
                                "url": "https://mbernardes19.github.io/beer-bank/"
                            },
                            {
                                "title": "Código fonte",
                                "url": "https://github.com/mbernardes19/beer-bank"
                            }
                        ]
                    },
                    {
                        "title": "NG-Pokédex",
                        "description": "UI de uma Pokédex usando scroll infinito feita usando dados da PokéAPI.",
                        "itemsTitle": "Ferramentas de desenvolvimento",
                        "items": ["Angular 7", "Material UI", "Fetch API"],
                        "links": [
                            {
                                "title": "Site em produção",
                                "url": "https://stackblitz.com/github/mbernardes19/ng-pokedex/"
                            },
                            {
                                "title": "Código fonte",
                                "url": "https://github.com/mbernardes19/ng-pokedex"
                            }
                        ]
                    },
                    {
                        "title": "CobrinhaJS",
                        "description": "Jogo desenvolvido usando puramente Vanilla JS para treinar habilidades de JS sem depender de frameworks. Peso total: 12.6 kB.",
                        "itemsTitle": "Ferramentas de desenvolvimento",
                        "items": ["JavaScript", "HTML", "CSS", "GitHub Pages"],
                        "links": [
                            {
                                "title": "Site em produção",
                                "url": "https://mbernardes19.github.io/cobrinha-js/"
                            },
                            {
                                "title": "Código fonte",
                                "url": "https://github.com/mbernardes19/cobrinha-js"
                            }
                        ]
                    }
                ]
            }
    }
},
    en: {
        messages: {
            emailCopied: "Email copied!"
        },
        home: {
            title: "Home"
        },
        about: {
            title: "About",
            content: [
                "*I'm from Rio de Janeiro, living in São Paulo, Brazil.* My work currently consists in a full time role as Consultant Developer at ThoughtWorks, Programming Mentor at Aceleradora Ágil and Freelance Web Developer. Being able to work in so many ways is really resourceful for me as a developer because it brings me experience in working with many developer tools and in many business domains.",
                "In 2019 I got my first internship as a Frontend Developer working with Angular on a daily basis. Today I've been mainly working with React, React Native and Node to create my client's web products",
                "If you're searching for a developer to build a website, system or an app for your business, text me! Let's work together ;)"
            ]
        },
        blog: {},
        hero: {
            greeting: "Hi, I'm",
            name: "Matheus",
            content: "I'm a Web Developer, I also work as a Graphic Designer and I teach programming."
        },
        navLinks: {
            home: "Home",
            portfolio: "Portfólio",
            blog: "Blog",
            about: "About"
        },
        portfolio: {
            "title": "Portfolio",
            "development": {
                "title": "Development",
                "projects": [
                    {
                        "title": "Plasser Orders System",
                        "description": "Web system used by Plasser company's clients as a way to monitor their orders statuses. All the system data is populated and updated by spreadsheets exported by the company's main system.",
                        "itemsTitle": "Development tools",
                        "items": ["NodeJS", "NestJS", "NextJS (React)", "TypeORM", "MySQL", "Typescript", "ExcelJS"],
                        "links": [
                            {
                                "title": "Deployed website",
                                "url": "https://sistema-dados-ui.vercel.app"
                            },
                            {
                                "title": "UI Code",
                                "url": "https://github.com/mbernardes19/sistema-dados-ui"
                            },
                            {
                                "title": "API Code",
                                "url": "https://github.com/mbernardes19/sistema-dados-api"
                            }
                        ],
                        "hasGif": false,
                        "gif": ""
                    },
                    {
                        "title": "Bot Método Sempre Rico",
                        "description": "Telegram bot developed for the 'Método Sempre Rico' course. One of its job is to confirm that the user's purchase has been successfully accomplished, then to store their data and to give them access to the course's private channels. The other job is to send daily reports through email about the course's users and to make monthly checks on the channels in order to ban defaulting users.",
                        "itemsTitle": "Development tools",
                        "items": ["NodeJS", "TelegrafJS", "Telegram Bot API", "Cron Jobs", "Nodemailer", "MySQL", "KingHost Hosting Service"],
                        "links": [
                            {
                                "title": "Deployed bot",
                                "url": "https://t.me/metodo_sempre_rico"
                            },
                            {
                                "title": "Source code",
                                "url": "https://github.com/mbernardes19/metodo-semprerico-bot"
                            }
                        ],
                        "hasGif": true,
                        "gif":""
                    },
                    {
                        "title": "Beer Bank",
                        "description": "UI developed to display beer data from PunkAPI",
                        "itemsTitle": "Development tools",
                        "items": ["React", "Material UI", "Fetch API", "Local Storage API", "GitHub Pages"],
                        "links": [
                            {
                                "title": "Deployed website",
                                "url": "https://mbernardes19.github.io/beer-bank/"
                            },
                            {
                                "title": "Source code",
                                "url": "https://github.com/mbernardes19/beer-bank"
                            }
                        ],
                        "hasGif": false,
                        "gif":""
                    },
                    {
                        "title": "NG-Pokédex",
                        "description": "UI of a Pokédex with infite scroll using data from PokéAPI.",
                        "itemsTitle": "Development tools",
                        "items": ["Angular 7", "Material UI", "Fetch API"],
                        "links": [
                            {
                                "title": "Deployed web site",
                                "url": "https://stackblitz.com/github/mbernardes19/ng-pokedex/"
                            },
                            {
                                "title": "Source code",
                                "url": "https://github.com/mbernardes19/ng-pokedex"
                            }
                        ],
                        "hasGif": false,
                        "gif":""
                    },
                    {
                        "title": "CobrinhaJS",
                        "description": "Game developed using purely VanillaJS to practice skills with JS without frameworks. Total size: 12.6 kB.",
                        "itemsTitle": "Development tools",
                        "items": ["JavaScript", "HTML", "CSS", "GitHub Pages"],
                        "links": [
                            {
                                "title": "Deployed web site",
                                "url": "https://mbernardes19.github.io/cobrinha-js/"
                            },
                            {
                                "title": "Source code",
                                "url": "https://github.com/mbernardes19/cobrinha-js"
                            }
                        ],
                        "hasGif": false,
                        "gif":""
                    }
                ]
            }
        }
    }
}

export default langs;
