import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import schoolLogo from "@/assets/tis/schoolLogo.95f6e121.png.asset.json";
import schoolTopView from "@/assets/tis/schoolTopView.6e263e02.webp.asset.json";
import madeForFuture from "@/assets/tis/madeForFuture.e96fe7c1.png.asset.json";
import ladyInPink from "@/assets/tis/ladyInPink.c358aa8f.png.asset.json";
import Cricket from "@/assets/tis/Cricket.b06b18ca.png.asset.json";
import archery from "@/assets/tis/archery.7a805345.png.asset.json";
import cycling from "@/assets/tis/cycling.80dbb9b1.png.asset.json";
import hockey from "@/assets/tis/hockey.219fe552.png.asset.json";
import swimming from "@/assets/tis/swimming.d4285534.png.asset.json";
import taekwando from "@/assets/tis/taekwando.86e26406.png.asset.json";
import football from "@/assets/tis/football.ca61e5d0.png.asset.json";
import basketball from "@/assets/tis/basketball.fa70909d.png.asset.json";
import shooting from "@/assets/tis/shooting.b0b11d74.png.asset.json";
import horseRiding from "@/assets/tis/horseRiding.8f259127.png.asset.json";
import image1 from "@/assets/tis/image1.a3011dda.png.asset.json";
import image2 from "@/assets/tis/image2.5d908b38.webp.asset.json";
import image3 from "@/assets/tis/image3.b8273b93.png.asset.json";
import sports from "@/assets/tis/sports.e695b690.png.asset.json";
import medical from "@/assets/tis/medical.e87071fe.png.asset.json";
import ratio from "@/assets/tis/ratio.6ca07c6a.png.asset.json";
import ranking from "@/assets/tis/ranking.157c5a68.png.asset.json";
import SakshiMalik from "@/assets/tis/SakshiMalik.91174bf4.webp.asset.json";
import VisheshBhriguvanshi from "@/assets/tis/VisheshBhriguvanshi.52af8bfd.webp.asset.json";
import PrakashiTomar from "@/assets/tis/PrakashiTomar.339dbb95.webp.asset.json";
import AbhishekVerma from "@/assets/tis/AbhishekVerma.18f9d349.webp.asset.json";
import AditiGopichandSwami from "@/assets/tis/AditiGopichandSwami.b7afa246.webp.asset.json";
import DhanSinghRawat from "@/assets/tis/DhanSinghRawat.f504bd14.webp.asset.json";
import SubodhUniyal from "@/assets/tis/SubodhUniyal.25533860.webp.asset.json";
import RameshPokhriyalNishank from "@/assets/tis/RameshPokhriyalNishank.5f11fd77.webp.asset.json";
import BhagatSinghKoshyari from "@/assets/tis/BhagatSinghKoshyari.f996a329.webp.asset.json";
import DharmendraPradhan from "@/assets/tis/DharmendraPradhan.cae1e9ae.webp.asset.json";
import TopBoarding from "@/assets/tis/TopBoarding.e5405c1a.jpg.asset.json";
import BestResidential from "@/assets/tis/BestResidential.5173db8d.jpg.asset.json";
import UTTARAKHAND from "@/assets/tis/UTTARAKHAND.652376d5.jpg.asset.json";
import tashi from "@/assets/tis/tashi.3807cb3c.png.asset.json";
import namita from "@/assets/tis/namita.86a0f799.png.asset.json";
import sandeep from "@/assets/tis/sandeep.1b22b59e.png.asset.json";
import pinky from "@/assets/tis/pinky.8d7145b0.png.asset.json";
import footerLogo from "@/assets/tis/footer-logo.230b79ff.png.asset.json";
import Universidad from "@/assets/tis/Universidad.935e33e1.png.asset.json";
import InternationalAward from "@/assets/tis/International_Award_for_Young_People_logo.a0d1c4fa.jpg.asset.json";
import lions from "@/assets/tis/lions.bf493cc1.png.asset.json";
import inseecU from "@/assets/tis/inseecU.1e5c929a.png.asset.json";
import Universitas from "@/assets/tis/Universitas.d9db402c.png.asset.json";
import University from "@/assets/tis/University.6c89dc70.png.asset.json";

const nav = ["ABOUT TIS", "ACADEMICS", "BOARDING LIFE", "BEYOND ACADEMICS", "EVENTS", "ADMISSION", "MANDATORY DISCLOSURE", "ALUMNI NETWORK", "QUICK LINKS"];

const sportItems = [
  ["ARCHERY", archery.url], ["CYCLING", cycling.url], ["HOCKEY", hockey.url], ["SWIMMING", swimming.url],
  ["TAEKWONDO", taekwando.url], ["FOOTBALL", football.url], ["SHOOTING RANGE", shooting.url], ["HORSE RIDING", horseRiding.url],
];

const people = [
  ["Sakshi Malik", "First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist and Padma Shri Awardee 2017", SakshiMalik.url],
  ["Vishesh Bhriguvanshi", "Indian Basketball Team Captain & Major FIBA Asia Championship Player", VisheshBhriguvanshi.url],
  ["Prakashi Tomar & Late Ms Chandro Tomar", "Based on their real life, the biopic movie ‘Saand Ki Aankh’ was made", PrakashiTomar.url],
  ["Abhishek Verma", "Arjuna Awardee, Asian Games Gold Medalist in Archery", AbhishekVerma.url],
  ["Aditi Gopichand Swami", "Arjuna Awardee and World Champion in Archery", AditiGopichandSwami.url],
];

const leaders = [
  ["Shri Dhan Singh Rawat Ji", "Minister of Higher Education, Uttarakhand", DhanSinghRawat.url],
  ["Shri Subodh Uniyal Ji", "Technical Education and Forest Minister, Uttarakhand", SubodhUniyal.url],
  ["Dr Ramesh Pokhriyal Nishank Ji", "Former Union Cabinet Minister for Education, Government of India", RameshPokhriyalNishank.url],
  ["Shri Bhagat Singh Koshyari Ji", "Former Governor of Maharashtra and Goa", BhagatSinghKoshyari.url],
  ["Shri Dharmendra Pradhan Ji", "Union Minister of Education for India", DharmendraPradhan.url],
];

const reviews = [
  ["Tashi Tsering", "F/O Jigmet Skaldon", "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.", tashi.url],
  ["Namita Agarwal", "M/O Krishna Agarwal", "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna.", namita.url],
  ["Sandeep Kumar", "F/O Aryan", "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school.", sandeep.url],
  ["Pinky Sharma", "M/O Swastik Sharma", "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good.", pinky.url],
];

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="tis-header">
      <div className="tis-helpline"><Phone size={16} fill="currentColor" /><span>ADMISSIONS HELPLINE NO. +91-9837983791</span><a href="#enquire">Enquire Now</a></div>
      <div className="tis-nav">
        <a href="#top" className="tis-logo"><img src={schoolLogo.url} alt="Tulas International School" /></a>
        <nav>{nav.map(item => <a key={item} href={item === "ADMISSION" ? "#enquire" : "#about"}>{item}</a>)}</nav>
        <button type="button" aria-label="Open menu" className="tis-menu" onClick={() => setOpen(true)}><Menu /></button>
      </div>
    </header>
    {open && <div className="tis-menu-overlay"><button type="button" aria-label="Close menu" onClick={() => setOpen(false)}><X /></button><img src={schoolLogo.url} alt="" />{nav.map(item => <a key={item} href="#about" onClick={() => setOpen(false)}>{item}</a>)}</div>}
  </>;
}

function EnquiryForm() {
  return <section id="enquire" className="enquiry-wrap">
    <div className="contact-panel"><h3>Contact Us.</h3><p><Phone /> Admission Helpline No. +91-98379 83791</p><p><Mail /> info@tis.edu.in</p><p><MapPin /> Tulas International School Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)</p><p><Phone /> Landline No. 0135-2699444, 0135-2699666</p><img src={schoolLogo.url} alt="" /></div>
    <form className="enquiry-panel" onSubmit={(event) => event.preventDefault()}><h3>Enquire Now!</h3>
      <div className="field-grid"><input aria-label="Full name" placeholder="Enter your Full Name...." /><input aria-label="Email" placeholder="Enter Email Id (Optional)" /><div className="phone-field"><span>+91</span><input aria-label="Mobile number" placeholder="Enter your Mobile No...." /></div><button type="button">Send OTP</button><input aria-label="OTP" placeholder="Enter OTP" /><button type="button">Verify OTP</button><label>Select Class <ChevronDown /></label><label>Select State <ChevronDown /></label></div>
      <p className="consent"><input type="checkbox" /> I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun</p><button type="submit" className="submit-enquiry">Enquire Now</button>
    </form>
  </section>;
}

function Hero() {
  return <>
    <section id="top" className="tis-hero">
      <div className="hero-bubble hero-basket"><img src={basketball.url} alt="Students playing basketball" /></div>
      <div className="hero-bubble hero-dance"><img src={ladyInPink.url} alt="Student performing classical dance" /></div>
      <div className="hero-bubble hero-cricket"><img src={Cricket.url} alt="Student playing cricket" /></div>
      <div className="hero-bubble hero-archery"><img src={shooting.url} alt="Student practising shooting" /></div>
      <div className="hero-copy"><strong>LET'S DO <em>it</em></strong><strong>With <em>Tulas</em></strong><i /></div>
      <p className="hero-about">Tulas International School was established in 2012 under the aegis of Rishabh Educational<br />Trust to impart education through seamless opportunities.</p>
      <EnquiryForm />
    </section>
    <section className="campus-aerial" style={{ backgroundImage: `linear-gradient(var(--campus-overlay),var(--campus-overlay)),url(${schoolTopView.url})` }} />
  </>;
}

function FutureAndSports() {
  const [slide, setSlide] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setSlide(value => (value + 1) % 2), 5000); return () => window.clearInterval(timer); }, []);
  const visible = sportItems.slice(slide * 4, slide * 4 + 4);
  return <>
    <section id="about" className="future-section">
      <div className="student-quote top"><div><h3>“We feel supported in what we do and nudged further to do more”</h3><p>At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.</p></div><img src={ladyInPink.url} alt="Tulas student" /></div>
      <img className="future-title" src={madeForFuture.url} alt="Tula's is made for the future" />
      <div className="student-quote bottom"><img src={football.url} alt="Tulas student" /><div><h3>“Tulas helped me thrive and become the best version of myself”</h3><p>When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.</p></div></div>
    </section>
    <section className="sports-section"><h2>Sports?</h2><h3>It’s not just a <span>facility.</span> At Tulas it’s the <span>foundation!</span><br />16+ sports curated to bring joy and discipline to your life.</h3>
      <div className="sports-grid">{visible.map(([name, image]) => <article key={name}><img src={image} alt={name} /><strong>{name}</strong></article>)}</div>
      <div className="carousel-controls"><button type="button" aria-label="Previous sports" onClick={() => setSlide(slide === 0 ? 1 : 0)}><ArrowLeft /></button><i className={slide === 0 ? "active" : ""} /><i className={slide === 1 ? "active" : ""} /><button type="button" aria-label="Next sports" onClick={() => setSlide(slide === 1 ? 0 : 1)}><ArrowRight /></button></div>
    </section>
  </>;
}

function StatsAndRankings() {
  const stats = [["22", "ACRE POLUTION FREE CAMPUS", image3.url], ["16+", "OLYMPIC SPORTS", sports.url], ["24*7", "MEDICAL ASSISTANCE", medical.url], ["6:1", "STUDENT TEACHER RATIO", ratio.url]];
  const ranks = [["#1", "In Dehradun", "Co-Educational Boarding School in Dehradun by Education Today"], ["#2", "In Uttarakhand", "Co-Educational Boarding School in North India by Education Today"], ["#1", "In North India", "Co-Educational Boarding School in North India by Outlook"], ["#4", "In India", "Co-Educational Boarding School in India by Education Today"]];
  return <>
    <section className="secret-section"><div className="secret-copy"><h2>At Tulas, we always ask, “What’s the secret to<br />making school awesome?”</h2><p>The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.</p><a href="#rankings">There, we cracked it!</a></div>
      <div className="stats-grid">{stats.map(([num, label, icon], index) => <article key={label} className={index === 1 ? "stat-photo" : ""}><img src={icon} alt="" /><strong>{num}</strong><span>{label}</span></article>)}</div>
    </section>
    <section id="rankings" className="ranking-section"><article className="rank-intro"><img src={ranking.url} alt="Trophy" /><h3>Our Rankings</h3><p>Top Boarding School</p></article><span className="rank-arrow">➜</span>{ranks.map(([num, place, text]) => <article key={place} className="rank-card"><strong>{num}</strong><h3>{place}</h3><p>{text}</p></article>)}</section>
  </>;
}

function Personalities() {
  const cards = (items: string[][]) => <div className="people-row">{items.map(([name, bio, image]) => <article key={name}><img src={image} alt={name} /><h3>{name}</h3><p>({bio})</p></article>)}</div>;
  return <section className="personalities"><h2>Influential Personalities On Campus</h2><h4>Sports Person/Social Media Influencers</h4>{cards(people)}<h4>Leaders of India</h4>{cards(leaders)}</section>;
}

function AwardsAndParents() {
  return <>
    <section className="awards"><div className="award-collage"><img src={TopBoarding.url} alt="Top boarding school award" /><img src={UTTARAKHAND.url} alt="Uttarakhand award" /><img src={BestResidential.url} alt="Best residential school award" /></div><div><h2>Awards</h2><h3>We believe in celebrating the hard work<br />and perseverance of the best!</h3></div></section>
    <section className="virtual-tour" style={{ backgroundImage: `linear-gradient(var(--tour-overlay),var(--tour-overlay)),url(${schoolTopView.url})` }}><span>◉ 360°</span><h2>DIVE INTO OUR...<br />VIRTUAL TOUR</h2></section>
    <section className="parents"><h2>“ <span>From The <em>Parents</em></span></h2><p>Tulas International School has truly exceeded our expectations. The focus on holistic development and the encouragement provided by the teachers have played a significant role in our child's growth. We are grateful for the personalized attention and the care the school offers.</p><div className="video-row">{[1,2,3].map(n => <div key={n} className="video-placeholder"><span>▶</span></div>)}</div></section>
  </>;
}

function ReviewsAndFooter() {
  const partners = [Universidad.url, InternationalAward.url, lions.url, inseecU.url, Universitas.url, University.url];
  return <>
    <section className="reviews" style={{ backgroundImage: `linear-gradient(var(--reviews-overlay),var(--reviews-overlay)),url(${schoolTopView.url})` }}><h2>Google Reviews</h2><div className="review-row">{reviews.map(([name, relation, copy, image]) => <article key={name}><img src={image} alt={name} /><h3>{name}</h3><strong>{relation}</strong><p>{copy}</p></article>)}</div><div className="review-arrows">‹　›</div></section>
    <section className="collaborations"><h2>12+ <em>COLLABORATIONS</em></h2><div>{partners.map((logo, index) => <img key={logo} src={logo} alt={`Collaboration ${index + 1}`} />)}</div><i /><i /></section>
    <footer style={{ backgroundImage: `linear-gradient(var(--footer-overlay),var(--footer-overlay)),url(${schoolTopView.url})` }}><div className="footer-main"><div className="map-placeholder"><MapPin /><span>Tulas' International School</span><a href="https://maps.google.com" target="_blank" rel="noreferrer">Open in Maps</a></div><div className="footer-address"><img src={footerLogo.url} alt="Tulas International School" /><p>Tulas International School<br />Dhoolkot, P.O – Selaqui, Chakrata Road,<br />Dehradun-248011 (Uttarakhand)</p><p>Landline No. 0135-2699444, 0135-2699666<br />Admission Helpline No. +91-9837983791<br />info@tis.edu.in</p></div><div className="footer-links">{["FAQ","Calendar","Brochure","Privacy Policy","Terms & Conditions","Disclaimer","Disciplinary Policy","Mobile Phone Policy","Child Welfare & Safety Policy"].map(x => <a href="#top" key={x}>{x}</a>)}</div><div className="footer-ctas"><a href="https://tis.edu.in/virtual-tour/">Virtual Tour</a><a href="https://admission.tis.edu.in">Apply Now</a><a href="https://tis.fedena.com/">Fedena Login</a></div></div><div className="copyright">Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved<br />Designed and Managed By NetPuppys<div>●　𝕏　in　◎　▶</div></div></footer>
  </>;
}

function FloatingButtons() {
  return <><a className="apply-tab" href="#enquire">APPLY NOW</a><a className="whatsapp" href="https://wa.me/919837983791" aria-label="Chat on WhatsApp"><MessageCircle /></a><button type="button" className="eva" aria-label="Open virtual admission assistant"><span>Hey! I am Eva, your virtual<br />admission assistant.</span>👩🏻‍💼</button><a className="mobile-enquire" href="#enquire">Enquire Now</a></>;
}

export default function TisHome() {
  return <main><Header /><Hero /><FutureAndSports /><StatsAndRankings /><Personalities /><AwardsAndParents /><ReviewsAndFooter /><FloatingButtons /></main>;
}