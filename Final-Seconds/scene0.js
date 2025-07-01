// scene0.js
export const scenes = {
  /* ─────────── SCENE: Introductory Setup - FBI Office Initial Crisis Call ─────────── */
  intro: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The morning rain hammers against the FBI field office windows with an almost vindictive persistence. Coffee grows cold in paper cups while phones ring with the relentless urgency that only comes when everything goes sideways at once.*",
        delay: 1000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Emma, this is Control. Drop whatever you're doing and get to First Unity Bank on Fifth Street. We have a hostage situation developing, and I need you to step in as primary negotiator.",
        delay: 1500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Primary? Wait—what happened to Reynolds? And let's be honest here, I've assisted in maybe three negotiations total. This seems like a job for someone who actually knows what they're doing.",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Emma's hands unconsciously fidget with her badge, a nervous habit she developed during her academy days. The fluorescent lights above cast harsh shadows across her desk, where case files sit half-finished—mundane fraud investigations that suddenly seem blissfully simple.*",
        delay: 2500
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Reynolds was T-boned by a drunk driver three blocks from the scene—he's stable but sedated at General Hospital. You're the closest qualified agent we have, and Emma... sometimes the universe picks you whether you feel ready or not.",
        delay: 3000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "The universe has questionable judgment. Look, I've spent most of my career analyzing financial records and interviewing accountants. The most dangerous thing I've faced is papercuts from endless bank statements.",
        delay: 2500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Through the office window, Emma can see the flashing lights reflecting off rain-slicked asphalt. Emergency vehicles streak past like angry meteors, each one a reminder that somewhere across town, real people are trapped in a nightmare that's about to become her responsibility.*",
        delay: 3000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Emma, listen to me carefully. Reynolds has been monitoring the situation remotely from his hospital bed—against medical advice, I might add. He's already briefed me, and his exact words were 'Emma Carter has the sharpest analytical mind in the bureau.' That's not nothing.",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Reynolds said that? He must be more medicated than they're admitting. Reynolds, are you actually coherent enough for this? Please tell me you're not making life-or-death decisions while on morphine.",
        delay: 2500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, I'm lucid enough to know you're catastrophizing. Yes, I'm hooked up to more machines than a NASA launch, but my brain is working fine. You've been ready for this—you just don't know it yet.",
        delay: 3000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Ready for this? Reynolds, last week I spent twenty minutes trying to talk my neighbor's cat out of a tree. The cat won that negotiation—it's still up there.",
        delay: 2500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "And yet somehow you always know exactly the right questions to ask during suspect interviews. Remember the Blackwood embezzlement case? You unraveled three years of financial fraud because you noticed the suspect's coffee order didn't match his claimed income level.",
        delay: 3500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Emma remembers that case—how she'd noticed the defendant's casual mention of preferring single-origin Ethiopian beans when he claimed to be struggling financially. Details. She's always been good with details. But this isn't about spreadsheets and bank records.*",
        delay: 3000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "That was different. Numbers don't panic. Numbers don't have guns. Numbers don't take innocent people hostage because the world screwed them over.",
        delay: 2500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "No, but the people behind those numbers do. And you understand people, Emma. You see patterns where others see chaos. That's exactly what we need right now.",
        delay: 3000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Alright, enough pep talk. Emma, you're wheels-up in five minutes. Reynolds will guide you through earpiece communication, and we have a full tactical support team standing by. You're not alone in this.",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Okay. Okay, I can do this. If Reynolds thinks I'm ready, and he's usually right about these things... What's our initial strategy? What kind of situation are we walking into?"
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Emma's reflection stares back from her blank computer screen—determined but uncertain. Outside, the rain continues its relentless percussion, as if the city itself is holding its breath for what comes next.*",
        delay: 2500
      }
    ],
    choices: [
      {
        id: 'intel',
        text: 'Recommend starting with comprehensive intelligence gathering on all parties involved.',
        userResponse: "Emma, let's start with deep intelligence gathering. The more we know about everyone involved—suspects, hostages, even the bank itself—the better equipped we'll be to find pressure points and solutions.",
        nextScene: 'start'
      },
      {
        id: 'comms',
        text: 'Advise establishing immediate communication to understand the true nature of their demands.',
        userResponse: "Emma, let's establish communication immediately. Sometimes the first conversation reveals everything you need to know about motivation, desperation level, and potential for peaceful resolution.",
        nextScene: 'start'
      },
      {
        id: 'observation',
        text: 'Suggest a period of silent observation to assess the psychological dynamics.',
        userResponse: "Emma, sometimes the best intelligence comes from just watching. Body language, group dynamics, stress levels—let's take time to really see what we're dealing with before we make our presence known.",
        nextScene: 'start'
      }
    ]
  }
};
