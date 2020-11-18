import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

//import Image from 'next/image';
import Stars from '../components/stars';
import Repos from '../components/repos';
import Techs from '../components/techs';

export default function Index() {
    return (
        <>
            <Head>
                <title>Sidney Deus - Web Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div className="container mx-auto">
                <div className="border">
                    <div className="flex flex-wrap bg-gray-200">
                        <div className="w-full md:w-2/3 text-left px-2 py-2 m-0">
                            <p className="text-1xl">
                                Full Stack Developer with e-commerce experience, responsive websites
                                and apps.
                            </p>
                            <p className="text-1xl">
                                I am currently working on short-term projects and supporting partner
                                agencies.
                            </p>
                            <p className="text-1xl">Since 2013 working from home.</p>
                            <br />
                            <h4 className="text-2xl text-left border-b">Experience</h4>
                            <ul className="list-disc p-8">
                                <li>
                                    Developing e-Commerce for small and medium-sized business using
                                    Magento plataform
                                </li>
                                <li>Programming websites using Wordpress plataform</li>
                                <li>Software developing using Laravel framework</li>
                                <li>API developing using NodeJs</li>
                                <li>Building web interfaces using HTML5/CSS3/JAVASCRIPT</li>
                                <li>Fixing websites bugs</li>
                                <li>Configuring cloud instances and services</li>
                            </ul>
                            <h4 className="text-2xl text-left border-b">Projects</h4>
                            <ul className="list-disc p-8">
                                <li>New institutional website for a large logistics company</li>
                                <li>Online store for selling books</li>
                                <li>...</li>
                            </ul>
                            <h4 className="text-2xl text-left border-b">Education</h4>
                            <ul className="list-disc p-8">
                                <li>Computer Science for 4 years</li>
                                <li>Computer Technician for 3 years</li>
                            </ul>
                            <br />
                            <h4 className="text-2xl text-center border-b mb-5">GITHUB REPOS</h4>
                            <Repos />
                            <br />
                            <h4 className="text-2xl text-center border-b mb-5">TECHS</h4>
                            <Techs />
                        </div>
                        <div className="w-full md:w-1/3 bg-gray-400 my-4 p-4 rounded-2xl">
                            <h3 className="text-1xl text-left mb-4 border-b border-gray-600 font-bold">
                                Personal Information
                            </h3>
                            <h4 className="text-left font-bold">Address</h4>
                            <p>São Vicente/São Paulo/Brasil</p>
                            <h4 className="text-left font-bold">Phone</h4>
                            <p>
                                <a href="https://wa.link/3b26zi">55+ 47 98886-7898</a>
                            </p>
                            <h4 className="text-left font-bold">E-mail</h4>
                            <p>
                                <a href="mailto:sidney.deus@gmail.com">sidney.deus@gmail.com</a>
                            </p>
                            <h4 className="text-left font-bold">Linkedin</h4>
                            <p>
                                <a href="http://www.linkedin.com/in/sidney-deus">
                                    http://www.linkedin.com/in/sidney-deus
                                </a>
                            </p>
                            <h4 className="text-left font-bold">Github</h4>
                            <p>
                                <a href="https://github.com/sidneydeus">
                                    https://github.com/sidneydeus
                                </a>
                            </p>

                            <br />
                            <h3 className="text-1xl text-left mb-4 border-b border-gray-600 font-bold">
                                Programming Skills
                            </h3>
                            <div>
                                <div className="flex">
                                    <div className="flex-1">PHP</div>
                                    <div className="flex-end">
                                        <Stars numbers="5" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">NodeJs</div>
                                    <div className="flex-end">
                                        <Stars numbers="3" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">Javascript</div>
                                    <div className="flex-end">
                                        <Stars numbers="4" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">GO</div>
                                    <div className="flex-end">
                                        <Stars numbers="2" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">CSS</div>
                                    <div className="flex-end">
                                        <Stars numbers="3" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">SQL</div>
                                    <div className="flex-end">
                                        <Stars numbers="4" />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <h3 className="text-1xl text-left mb-4 border-b border-gray-600 font-bold">
                                Soft Skills
                            </h3>
                            <div className="flex">
                                <div className="flex-1">Criativity</div>
                                <div className="flex-end">
                                    <Stars numbers="5" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1">Communication</div>
                                <div className="flex-end">
                                    <Stars numbers="3" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1">Critical Thinking</div>
                                <div className="flex-end">
                                    <Stars numbers="4" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1">Control of Emotions</div>
                                <div className="flex-end">
                                    <Stars numbers="4" />
                                </div>
                            </div>
                            <br />
                            <h3 className="text-1xl text-left mb-4 border-b border-gray-600 font-bold">
                                Languages
                            </h3>
                            <div>
                                <div className="flex">
                                    <div className="flex-1">English</div>
                                    <div className="flex-end">
                                        <Stars numbers="4" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">Spanish</div>
                                    <div className="flex-end">
                                        <Stars numbers="2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
