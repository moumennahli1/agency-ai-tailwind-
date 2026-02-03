export default function Map() {
  return (
    <div className="w-screen -mx-6 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-none overflow-hidden shadow-lg">
      <iframe
        title="Pharmacie Agardi Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3324.890067983821!2d-7.5146803855896!3d33.55623245239258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4a079e792b%3A0x5af217fe68e7b90c!2sPHARMACIE%20AGARDI!5e0!3m2!1sen!2sma!4v1769967077459!5m2!1sen!2sma"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}