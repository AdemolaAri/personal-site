export interface Introduction {
    greeting: string;
    name: string;
    message: string
}

export interface Networking {
    github?: Link;
    linkedin?: Link;
    twitter?: Link;
    facebook?: Link;
    instagram?: Link;
    stackoverflow?: Link;
}

type Link = string;