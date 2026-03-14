---
title: > 
    a polite stance on “ai”
description: >
    yes, this is the polite version
date: "2026-03-05"
---

you don't need me to give you a tour on all the ways "artificial intelligence" has been a net negative on society, you've been living in it for long enough. if you still think, three and a half years into the "A.I. revolution", that we're six months away from A.I. being anything more than a google search for your parents who don't know any better, nothing i do or say will help to convince you.

this is, rather, a stance as it pertains to me and my work, as a writer and web developer. it's a very straightforward one:

**i will** <b>**never**</b> **use large language models. ever.** <b>**no exceptions.**</b>

not for fun, not for "project integration", not to "assist" me, not at all. this is not for merely ethical reasons, but because i have the foresight to understand this technology is a net negative on the quality i can put out of my work.

the reasons i will now list below, rather than being a complete list of issues with large language models (of which there are far more than i can ever write), are issues i would have with implementing them.

## A.I. makes for worse code & coders

consistently, evidence repeatedly shows the benefits of A.I. do not fundamentally exist. [companies do not meaningfully save money from it](https://www.theregister.com/2026/01/20/pwc_ai_ceo_survey/), even as they justify layoffs with it, and studies directly measuring performance improvements in programming show that even as people believe they perform better, [A.I. ***actively slows down*** anyone who uses them.](https://arxiv.org/abs/2507.09089)

<b>**coders who use A.I. are offloading their own logical thinking to the machine.**</b> the perceived "performance improvements" are a result of coders *literally thinking less*. this results in code nobody actually wrote being pushed, which makes the code harder to understand for everyone, including whoever generated it, which wastes time as someone (usually someone *else*) has to clean up after it.

real world scenarios already show the flaws in relying on this. github, owned by microsoft, [a company known to force A.I.](https://www.businessinsider.com/microsoft-internal-memo-using-ai-no-longer-optional-github-copilot-2025-6) on its employees, [can't go even a few days without significant outages.](https://www.theregister.com/2026/02/10/github_outages/) windows 11, also owned by microsoft, regularly experiences updates so broken that [it quite literally deletes your internet access.](https://www.neowin.net/news/windows-11-25h2-24h2-allegedly-still-deleting-internet-and-with-only-one-way-to-fix-it/)

even looking purely visually at the work of modern, supposedly "luxury" brands, evidence of A.I. code's destruction is everywhere. apps, websites and operating systems all now have clear, telltale signs of poor polish, that only a few years ago would have been a sign of novice frontend experience, [or a bad linux distribution pretending to be like a macbook.](https://mastodon.social/@jk/115496333577145505)

if i am learning a new framework, or language, or stack, i will simply choose to tackle that head-on. i don't need something that makes it strictly harder to do so.

## A.I. won't be this cheap forever

every time anyone uses an A.I. bot, like claude, or gemini, or whatever's violating HIPAA at your local doctor's office, the company that runs the A.I. is losing money. A.I. data centers are wildly expensive, even when the cost of power is cheap; power is currently wildly expensive, [because of A.I. data centers.](https://pivot-to-ai.com/2026/03/05/power-prices-data-centres-nothing-but-data-centres/)
*[HIPAA]: health insurance portability and accountability act

the price of tokens, up to and including the most expensive options, do not reflect this cost. A.I. companies rarely divulge the exact numbers, out of fear of scaring investors, but the few times they do, numbers can be as bleak as [gaining $250 a month to lose ***$15,000***.](https://www.theregister.com/2025/10/15/augment_pricing_model/?td=keepreading) the rest of that cost is subsidized by venture capital, in the hopes that, when these subsidies dry up, and companies need to actually make money, enough people will be locked into the A.I. ecosystem to maintain a profit anyways.

when that happens, it will become so expensive to maintain everyone's favorite "coding assistants" that it will no longer be any cheaper than simply hiring an extra hand.

<b>**it is simply irrational to rely on tools that will eventually become cost-prohibitive.**</b> when the time comes for A.I. to gatekeep everyone who can't pay up, i would rather have tools i can still maintain.

## A.I. is a security nightmare

<b>**to a large language model, there is no difference between instructions and information.**</b> as a result, if you tell one to scan a document, and it interprets something in that document as *something the A.I. must do*, it will now ignore your request in favor of doing that.

it may do this by accident, but it may also do this *as a result of intentional malignance.* [this is called prompt injection,](https://en.wikipedia.org/wiki/Prompt_injection) and it is an unfixable flaw in all models, as there is no way for the A.I. to ever fully separate the two.

this can result in [active theft of private information.](https://x.com/mbrg0/status/1953815729947447770) attempts to "patch" this flaw [can be easily circumvented,](https://hiddenlayer.com/innovation-hub/novel-universal-bypass-for-all-major-llms/) [with even mild creativity.](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/) even in scenarios where no attempt is made to hide the intended abuse, [malicious prompts can simply be brute-forced into working with enough attempts.](https://www.varonis.com/blog/reprompt) it is not something that can ever be meaningfully removed from the model.

even if i had no ethical concerns, under no circumstances do i plan on being held liable for implementing something so obviously dangerous to a majority of the things it comes into contact with.

## A.I. cannot improve to fix these

you will have likely heard the term "hallucinations". this is a very polite smokescreen, invoking terminology that humanizes the algorithm, to avoid mentioning why such "hallucinations" occur. 

**the large language models we refer to as "A.I." have a** <b>**fundamental incorrectness**</b>**, built into the fabric of how their pattern-matching works.** this is because all large language models are merely guessing what a likely response would be from viable patterns, and *likely* is not the same as *correct*. this incorrectness is, by design, a permanent fixture. 

this is not unlike *machine learning*, the thing we used to call "A.I." before chatgpt showed up. a crucial difference, however, is that machine learning's inherent incorrectness is well-known, and developers can therefore optimize it by trading a little bit of accuracy for far more speed. machine learning algorithms, such as the ones used for speech-to-text programs, are efficient enough to run entirely on your phone, making them incredibly viable for the niches they serve.

<b>**large language models, however, cannot ever be optimized.**</b> to maintain the illusion it can be something more than a tech demo, it must pretend that accuracy --- and therefore, the power, and compute, and queries, needed to be more "accurate" --- can meaningfully improve itself, meaning it can only get more expensive.

already, even with the entire, literal internet stored in their learnsets, this has reached an impassable ceiling of potential. there is not enough power. there will never be enough compute. when wrongness is an encoded part of an algorithm's DNA, it cannot simply disappear by throwing all the technology in the world at it. 

## the consequences of A.I. will eat itself alive

[A.I. has gutted memory supplies.](https://www.cbc.ca/news/business/ram-shortage-consumer-electronics-9.7102991) storage, graphics cards and computer processors are being taken out of consumer hardware to instead be put in datacenters. even if the A.I. craze dies overnight, many of these supply chain decisions can't be undone until 2027, at the earliest.

for the first time in decades, <b>**we are entering an era of computing where our hardware is about to be strictly worse than it used to be.**</b> while many things can be sent to cloud computing and cloud streaming, the applications, and *web-applications*, that get you to those cloud services must still be presented in efficient fashion.

the investor-forced A.I. craze may be consuming the lives of anyone looking for an excuse to dodge doing work, but especially as we enter an age of late-zoomer vibe coders regurgitating the same bad code from a decade ago, it's going to make *being actually good at web development* all the more important.

---

i'd love to be like many people and simply ignore A.I. until a later date, because i know it will eventually pass. nothing about a technology glued together by subsidies and snake oil can hold.

unfortunately, i have this problem that many others have, wherein i need food, and housing, and i need a job that allows me to gain money for those things. once upon a time, having experience in web development would have given me a job fairly easily, but as of right now, A.I. is so stuck onto every facet of the job market that even when i find the rare job listings for non-senior developers, they're all laced with slop-ridden descriptions and broken job titles.

i have found multiple listings where whoever is working for these million-dollar companies couldn't even be bothered to delete the *"sure! here's your description:"* before pasting it in. there's a lot of pain in knowing how many people still have to humor these listings, given how many bosses try to do "A.I. layoffs" that won't work, and never will.

this is the only transformation A.I. is meaningfully responsible for; not a "revolution" in computing, not true progress in technology, but an executive class who has never done anything on their own, finding excuses to fire anyone who could possibly serve a use in the real world.

that class, unsure how *they* can live without a chatbot deciding their meals and schedules, will treat me, someone who doesn't use a chatbot at all, as a worse candidate. but when A.I. crashes, <b>**and it will,**</b> many of those same people will suddenly be at a loss to do just about anything at all, having spent so long on not building or doing anything on their own. the best i can do, until then, is make it clear i've never needed it.