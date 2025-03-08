
const articles = [
  {
    title: "Applauded Use Attempted Strangers Now Are Middleton",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikwZu-PjOvmlfjq2h9hhetRl8sPVlWP9dER9DOWikp0a0cxLhCzvhWOdfXEAw-49Y50RpL-2M4Uj77uTtEC-1izPj0i9h2CdRBkKHcoavXg7QHiYwV4Omhvp9iDzjfJ3Vh6AimWuzZg-yh/s1600/58.jpg",
  },
  {
    title: "Certainty Determine At Of Arranging Perceived Situation",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOt7GIMGIT4N1J54SUEe4rVnDK2iCpOpM6c6D6dWF_ALEgyj68cxn-TyQ2iCTn6hzq_ram5uTNZ8Rdyx2SLwhsI9-c_9uiUGX00dcJ5Ei3UVRLWW73Low-lLltdbdtXlGNXw3Eu8VND1Ry/s1600/60.jpg",
  },
  {
    title: "Cordial Because Are Account Evident Its Subject But Eat",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixMDvDcq4o62k1PhnurZaLDCJ-EW1-FNvM_DDshU4ow4k_ERX4FPa2kmKeIExAGwj18kAHkzkf7MJ8rZVnkfhbKFeJyQVuh6OxYr6rCikgraANL2bF1NAnhJHykpfOaVjmdKyD3RM8u1zg/s1600/57.jpg",
  },
  {
    title: "Pleased Anxious As In By Viewing Forbade Minutes",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVwQzdzXATg57n_A0kh58GgSSbSREkllylYpmkv4YmKRWWFwFLOQtgcDs8mKjdEMyewFfDfygijAsGitLnfshOzkgAZ9rMdi-E_tcTdNgoLvp8ZMycHuy33WzDj5BVypyF_bmY-Hwh5sJ-/s1600/59.jpg",
  },
];

export default function Sportsblog() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      {articles.slice(0, 2).map((article, index) => (
        <div key={index} className="relative group overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            width={500}
            height={380}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            SPORTS
          </div>
          <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent w-full p-4">
            <h3 className="text-white font-bold text-lg">{article.title}</h3>
            <p className="text-gray-300 text-sm">Sora Blogging Tips • Dec 05, 2015</p>
          </div>
        </div>
      ))}
      <div className="grid grid-rows-2 gap-4">
        {articles.slice(2).map((article, index) => (
          <div key={index} className="relative group overflow-hidden ">
            <img
              src={article.image}
              alt={article.title}
              width={500}
              height={150}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
            />
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            SPORTS
          </div>
          <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent w-full p-4">
            <h3 className="text-white font-bold text-lg">{article.title}</h3>
            <p className="text-gray-300 text-sm">Sora Blogging Tips • Dec 05, 2015</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}