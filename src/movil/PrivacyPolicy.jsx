import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyPolicy = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background overflow-y-auto"
        >
            {/* Top bar */}
            <div className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-white/[0.04]">
                <div className="container mx-auto px-6 max-w-4xl flex items-center justify-between py-4">
                    <h1 className="text-lg font-bold text-white font-display tracking-tight">
                        Política de Privacidad
                    </h1>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                        aria-label="Cerrar política de privacidad"
                    >
                        <X size={20} className="text-white/60" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 max-w-4xl py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="space-y-10"
                >
                    {/* Hero heading */}
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white font-display leading-tight">
                            Políticas de Privacidad
                        </h2>
                        <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
                    </div>

                    {/* Section: ¿Quiénes Somos? */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            ¿Quiénes Somos?
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Grupo Grandir es una consultora de gestión empresarial especializada en la
                            optimización y crecimiento de empresas. Nuestro objetivo es ayudar a las
                            organizaciones a reducir costes, mejorar procesos y alcanzar su máximo
                            potencial. La dirección de nuestra web es:{' '}
                            <a
                                href="https://www.grupograndir.com"
                                className="text-accent hover:text-accent/80 transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.grupograndir.com
                            </a>.
                        </p>
                    </section>

                    {/* Section: Comentarios */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            Comentarios
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se
                            muestran en el formulario de comentarios, así como la dirección IP del visitante
                            y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.
                        </p>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Una cadena anónima creada a partir de tu dirección de correo electrónico (también
                            llamada hash) puede ser proporcionada al servicio de Gravatar para ver si la estás
                            usando. Después de la aprobación de tu comentario, la imagen de tu perfil es
                            visible para el público en el contexto de tu comentario.
                        </p>
                    </section>

                    {/* Section: Medios */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            Medios
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Si subes imágenes a la web, deberías evitar subir imágenes con datos de ubicación
                            (GPS EXIF) incluidos. Los visitantes de la web pueden descargar y extraer cualquier
                            dato de ubicación de las imágenes de la web.
                        </p>
                    </section>

                    {/* Section: Cookies */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            Cookies
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección
                            de correo electrónico y web en cookies. Esto es para tu comodidad, para que no tengas
                            que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán
                            una duración de un año.
                        </p>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal
                            para determinar si tu navegador acepta cookies. Esta cookie no contiene datos
                            personales y se elimina al cerrar el navegador.
                        </p>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Cuando accedas, también instalaremos varias cookies para guardar tu información
                            de acceso y tus opciones de visualización de pantalla. Las cookies de acceso duran
                            dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas
                            «Recuérdarme», tu acceso perdurará durante dos semanas. Si sales de tu cuenta, las
                            cookies de acceso se eliminarán.
                        </p>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Si editas o publicas un artículo se guardará una cookie adicional en tu navegador.
                            Esta cookie no incluye datos personales y simplemente indica el ID del artículo
                            que acabas de editar. Caduca después de 1 día.
                        </p>
                    </section>

                    {/* Section: Contenido incrustado */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            Contenido incrustado de otro sitio web
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos,
                            imágenes, artículos, etc.). El contenido incrustado de otras webs se comporta
                            exactamente de la misma manera que si el visitante hubiera visitado la otra web.
                        </p>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento
                            adicional de terceros, y supervisar tu interacción con ese contenido incrustado,
                            incluido el seguimiento de tu interacción con el contenido incrustado si tienes una
                            cuenta y estás conectado a esa web.
                        </p>
                    </section>

                    {/* Section: Compartir datos */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            ¿Con quién compartimos tus datos?
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente.
                            Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente,
                            en lugar de mantenerlos en una cola de moderación.
                        </p>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            De los usuarios que se registran en nuestra web (si los hay), también almacenamos
                            la información personal que proporcionan en su perfil de usuario. Todos los usuarios
                            pueden ver, editar o eliminar su información personal en cualquier momento (excepto
                            que no pueden cambiar su nombre de usuario). Los administradores de la web también
                            pueden ver y editar esa información.
                        </p>
                    </section>

                    {/* Section: Derechos */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            ¿Qué derechos tienes sobre tus datos?
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir
                            un archivo de exportación de los datos personales que tenemos sobre ti, incluyendo
                            cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos
                            cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que
                            estemos obligados a conservar con fines administrativos, legales o de seguridad.
                        </p>
                    </section>

                    {/* Section: Envío de datos */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                            ¿Dónde enviamos tus datos?
                        </h3>
                        <p className="text-[15px] leading-relaxed text-secondary">
                            Los comentarios de los visitantes pueden ser revisados mediante un servicio automático
                            de detección de spam. Tus datos personales no serán cedidos a terceros sin tu
                            consentimiento, salvo obligación legal.
                        </p>
                    </section>

                    {/* Footer of privacy page */}
                    <div className="pt-10 border-t border-white/[0.04]">
                        <p className="text-xs text-white/20">
                            © {new Date().getFullYear()} Grupo Grandir. Todos los derechos reservados.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
