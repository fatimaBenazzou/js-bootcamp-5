import Heading from "../components/Heading";
import Generating from "../components/Generating";
import { Gradient } from "../components/Gradient";
import PhotoChatMessage from "../components/PhotoChatMessage";
import VideoBar from "../components/VideoBar";
import VideoChatMessage from "../components/VideoChatMessage";
import Section from "../components/Section";
import ServicesList from "../components/ServicesList";
import IconGrid from "../components/IconGrid";
import { BRAINWAVE_SERVICES, BRAINWAVE_SERVICE_ICONS } from "../constants";

export default function Services() {
    return (
        <Section id="services">
            <div className="container">
                <Heading
                    title="Generative AI made for creators."
                    text="Brainwave unlocks the potential of AI-powered applications"
                />

                {/* images */}
                <div className="relative">
                    <div className="relative z-10 flex items-center h-[39rem] mb-5 p-8 border border-neutral/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img
                                className="w-full h-full object-cover md:object-right"
                                width={800}
                                alt="Smartest AI"
                                height={730}
                                src={"/services/service-1.png"}
                            />
                        </div>

                        <div className="max-w-xs ml-auto flex flex-col gap-4">
                            <h4 className="h4">Smartest AI</h4>
                            <p className="body-2">
                                Brainwave unlocks the potential of AI-powered applications
                            </p>

                            <ServicesList services={BRAINWAVE_SERVICES} className="body-2 mt-6" />
                        </div>

                        <Generating className="w-3/5  lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
                    </div>

                    <div className="relative z-10 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-neutral/10 rounded-3xl overflow-hidden">
                            <div className="absolute -z-10 inset-0 ">
                                <img
                                    src={"/services/service-2.png"}
                                    className="h-full w-full object-cover"
                                    width={630}
                                    height={750}
                                    alt="robot"
                                />
                            </div>

                            <div className="flex flex-col h-full gap-4 justify-end p-8 bg-gradient-to-b from-bg/0 to-bg/90 lg:p-16">
                                <h4 className="h4">Photo editing</h4>
                                <p className="body-2">
                                    Automatically enhance your photos using our AI app&apos;s photo
                                    editing feature. Try it now!
                                </p>
                            </div>

                            <PhotoChatMessage />
                        </div>

                        <div className="p-4 bg-neutral-2/20 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8 flex flex-col gap-4">
                                <h4 className="h4">Video generation</h4>
                                <p className="body-2">
                                    The world’s most powerful AI photo and video art generation
                                    engine. What will you create?
                                </p>

                                <IconGrid
                                    icons={BRAINWAVE_SERVICE_ICONS}
                                    className="flex items-center justify-between"
                                />
                            </div>

                            <div className="relative h-80 bg-bg rounded-xl overflow-hidden md:h-[25rem]">
                                <img
                                    src={"/services/service-3.png"}
                                    className="w-full h-full object-cover"
                                    width={520}
                                    height={400}
                                    alt="Scary robot"
                                />

                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>

                    <Gradient />
                </div>
            </div>
        </Section>
    );
}
