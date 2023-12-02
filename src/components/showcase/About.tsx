import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Abdullah Sarder</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Full-Stack Web Developer currently I am a Full time studend. Studying Master of
                    Artificial Intelegence. I have 1.5 years industry exprience. 
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="abdullahsarder09@gmail.com">
                        abdullahsarder09@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                From a young age, I possessed an insatiable curiosity about the inner workings of things. It was this innate inquisitiveness that sparked my passion for sports, PC games, gadgets, and software development. While other children were content with simply playing, I found myself captivated by the intricacies of the games and gadgets I encountered.

Sports became a constant source of exhilaration and challenge for me. Whether it was kicking a ball or swinging a bat, I immersed myself in the thrill of competition and the joy of pushing my physical limits. This passion for sports fueled my determination to excel and taught me valuable lessons about teamwork, discipline, and perseverance.

Simultaneously, my fascination with technology flourished. As I delved into the world of PC games, I discovered not only the enjoyment they provided but also the underlying mechanics and design principles. This led me to explore the realm of software development, where I could actively participate in crafting digital experiences.

My journey through middle school, high school, and college further nurtured my passions. I eagerly joined sports teams, eagerly honing my skills and relishing every moment of the game. Meanwhile, my involvement in programming clubs and projects allowed me to explore the limitless possibilities of software creation.

In essence, my early interests in sports, PC games, gadgets, and software development have been the guiding forces behind my personal and educational growth. They have shaped my worldview, fostered a love for problem-solving, and ignited a lifelong pursuit of knowledge in these domains.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div> */}

                {/* <p>
                    I started programming more seriously in high school,
                    initially learning how to scrape and interact with websites.
                    I went on to do a ton of passion projects, many of them with
                    one of my closest friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/scott-bass-189a7919b/"
                    >
                        Scott Bass
                    </a>
                    . We worked on many projects together, including chat bots,
                    multiple game projects, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p> */}
                <br />
                <p>
                    In 2017, I got accepted into American International University-Bangladesh to study Computer Science. It was my first choice
                    and I was absolutely ecstatic to be going to such a great
                    university. At the end of my graduation, I start working for the startup Nest Go, primarily focusing
                    on UI/UX design and frontend development. I continued to work at Nest Go on and off
                    for about a year and a half, until the start of New journey Master of Artificial Intelligence.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond web development, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="https://www.behance.net/abdullahsarder">Graphics</Link>{' '}
                            and Jersey Design{' '}
                            <Link to="https://www.behance.net/abdullahsarder">Photography</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, playing football, and 
                            playing video games.
                        </p>
                        <br />
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Date</b> Me, May 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/abdullah"
                    >
                        @abdullahsarder
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:abdullahsarder09@gmail.com">
                        abdullahsarder09@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
