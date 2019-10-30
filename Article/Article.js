/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [{
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbconstonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarconst train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: `News Reports Indicate Cause for Concern`,
    date: `Oct 30th, 2019`,
    firstParagraph: `community The Daily he said she said crowdfunding just across the wire Patch Dan Fleckner Android morgue digital circulation strategy, Django hot news doctrine open source crowdsourcing WaPo the medium is the message natural-born blogger we will make them pay cancel my subscription experiment, writing nonprofit he said she said Pulse advertising Knight News Challenge engagement iPad app. fair use Quora Rupert Murdoch Article Skimmer recontextualize discuss morgue future Flipboard media diet kitchen table of the future 5% corruption, he said she said nut graf Innovator's Dilemma RT Reuters news.me Dayton for under $900 a day Reuters CPM paywall.`,
    secondParagraph: `explainer content is king try PR content farm The Weekender CPM reporting nut graf Ushahidi, go viral libel lawyer synergize curation awesome Free Darko inverted pyramid Rupert Murdoch metered model, Neil Postman Knight News Challenge Quora in the slot CPM paidContent metered model. Snarkmarket David Foster Wallace we will make them pay hot news doctrine eHow Rupert Murdoch Reuters anonymity, paywall information overload Dan Fleckner RT should isn't a business model This Week in Review people formerly known as the audience, fourth estate recontextualize analytics libel lawyer Free Darko Frontline.`,
    thirdParagraph: `Arianna backpack journalist iPad app paywall Fuego gutter he said she said bringing a tote bag to a knife fight morgue David Cohn, Like button synergize Colbert bump Fuego 5% corruption Voice of San Diego Walter Lippmann TBD, production of innocence process vs. product Steve Jobs Julian Assange crowdsourcing tweets tags David Cohn. +1 right-sizing tags algorithms mathewi The Weekender Flipboard #twittermakesyoustupid Innovator's Dilemma, The Work of Art in the Age of Mechanical Reproduction Tim Carmody go viral HuffPo scoop Paul Steiger Walter Lippmann collaboration, Chartbeat Frontline content is king backpack journalist Django Journal Register 5% corruption.`,
  },
  {
    title: `RUN FOR YOUR LIVES!`,
    date: `Oct 31st, 2019`,
    firstParagraph: `Haunt tearing murder crying an mental corpse zombies evil, chainsaw motionless gory. Eerie needles edginess, graveyard on death rotten, disturbin. Non grave. Children creepy deranged, ashes a killer a, monster mental hospital. Anthrax putrid, disturbing and morbid convulsing, rotten menacing fata. Bleak, monstrosity dread with demon scourge terrifying. Pain needles commodo drool rabid nightmare. Falling a spooky screaming. Disembowel stab, chains dungeon torment fiendish, gruesome psychopath monster captive.`,
    secondParagraph: `A mutilation possession obsession at fanatic. Creep serial killer, bury a scourge menacing, pain bowels nightmare. Graves slice ominous is guns exorcism guts. Undead obsession tear horrifying, a devil fiendish tense in. Gore at chainsaw knife crazed choking helpless. Falling are graveyard graves est. Haunt sliced at choking cut drool. Dar. Mutilation rotten, Blood hair raising or, blood in eyeball. Haunt sliced at choking cut drool. Menacing nightmare zombie deranged in stabbing. Graves slice ominous is guns exorcism guts. Virus witch demonic dripping, at werewolf psycho slice flames. Bloodcurdling decompose. Zombie in virus scared cat Michael Myers worms. Menacing nightmare zombie deranged in stabbing. Haunt suicide silent, gory as demonic alarming, buried in fallen angel. Dungeon in a gruesome, a disembowel unknown. Trapped flesh grotesque squeal, bloodcurdling chilling hair-raising spooky hazardous daring. Haunt suicide silent, gory as demonic alarming, buried in fallen angel. Death bruises moon torture demons devil or vampire werewolf wind. Horror bowels exorcism grave cut, murderer creatur.`,
    thirdParagraph: `Ripped. Haunt sliced at choking cut drool. Eyeball cat silent, morbid in damp torture, 666 at brains. Tearing eyeballs zombie slash. killer mental psychotic sliced. Blood ashes tearing. Drowning spooky at fanatic with murderer. Occult at alley pushed. Tearing eyeballs zombie slash. In the deranged Halloween slice. Disembowel stab, chains dungeon torment fiendish, gruesome psychopath monster captive, a mutilation possession obsession at fanatic. Screams creaking tension kettle our exorcist. Trapped flesh grotesque squeal, bloodcurdling chilling hair-raising spooky hazardous daring. Menacing nightmare zombie deranged in stabbing. Killer scourge scared, drowning helpless sheep at, terrifying and crazy gory. Sinister at creepy anxiety bite monster electrocution smashed.`,
  },
  {
    title: `The Zombies Have Won`,
    date: `Nov 1st, 2019`,
    firstParagraph: `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    secondParagraph: `Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.`,
    thirdParagraph: `Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?`,
  },
];

// ***refactored using class constructor***

class Article {
  constructor(obj) {
    this.title = obj.title;
    this.date = obj.date;
    this.firstParagraph = obj.firstParagraph;
    this.secondParagraph = obj.secondParagraph;
    this.thirdParagraph = obj.thirdParagraph;
  }
  createArticleHTML() {
    //create elements tool
    const create = element => document.createElement(element);
    //append to articleDiv tool
    const add = element => articleDiv.appendChild(element);
    //create elements
    const articleDiv = create('div');
    const title = create('h2');
    const date = create('p');
    const first = create('p');
    const second = create('p');
    const third = create('p');
    const articleExpand = create('span');
    //add classes
    articleDiv.classList.add("article");
    date.classList.add('date');
    articleExpand.classList.add('expandButton');
    //add content
    title.textContent = this.title;
    date.textContent = this.date;
    first.textContent = this.firstParagraph;
    second.textContent = this.secondParagraph;
    third.textContent = this.thirdParagraph;
    articleExpand.textContent = "click to expand";
    //add event listener to expand button 
    articleExpand.addEventListener('click', () => {
      articleDiv.classList.toggle('article-open')
      if (articleExpand.textContent === 'click to expand') {
        articleExpand.textContent = 'click to shrink';
      } else {
        articleExpand.textContent = "click to expand";
      }
    });
    //append to articleDiv
    add(title);
    add(date);
    add(first);
    add(second);
    add(third);
    add(articleExpand);
    return articleDiv;
  }
};

data.map(item => {
  const articleObj = new Article(item);
  document.querySelector('.articles').appendChild(articleObj.createArticleHTML());
});

// ***Function solution below***

// function articleBuilder(obj) {
//   //create elements tool
//   const create = element => document.createElement(element);
//   //append to articleDiv tool
//   const add = element => articleDiv.appendChild(element);
//   //create elements
//   const articleDiv = create('div');
//   const title = create('h2');
//   const date = create('p');
//   const first = create('p');
//   const second = create('p');
//   const third = create('p');
//   const articleExpand = create('span');
//   //add classes
//   articleDiv.classList.add("article");
//   date.classList.add('date');
//   articleExpand.classList.add('expandButton');
//   //add content
//   title.textContent = obj.title;
//   date.textContent = obj.date;
//   first.textContent = obj.firstParagraph;
//   second.textContent = obj.secondParagraph;
//   third.textContent = obj.thirdParagraph;
//   articleExpand.textContent = "click to expand";
//   //add event listener to expand button 
//   articleExpand.addEventListener('click', () => {
//     articleDiv.classList.toggle('article-open')
//     if (articleExpand.textContent === 'click to expand') {
//       articleExpand.textContent = 'click to shrink';
//     } else {
//       articleExpand.textContent = "click to expand";
//     }
//   });
//   //append to articleDiv
//   add(title);
//   add(date);
//   add(first);
//   add(second);
//   add(third);
//   add(articleExpand);
//   return articleDiv;
// }

// data.map(article => document.querySelector('.articles').appendChild(articleBuilder(article)));


// ***End of code***

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/