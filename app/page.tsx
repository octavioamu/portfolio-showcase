import BlurImage from "@/components/ui/blur-image";
import ImagesCarousel from "@/components/ui/imagesCarousel";
import Info from "@/components/ui/info";
import ProjectContent from "@/components/ui/projectContent";
import ProjectTitle from "@/components/ui/projectTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tag from "@/components/ui/tag";
import { placeholderBlurhash } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:p-10 mt-8 mb-20 lg:mx-auto mx-2 ">
      <div className="lg:max-w-5xl">
        <h1 className="text-4xl font-extrabold">Portfolio Showcase</h1>
        <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
          In my time working for Mantle (ex BitDAO) I worked on multiple
          projects, from airdrops to others like blogs, Governance Dapps,
          bridges.
        </p>
      </div>
      <div className="lg:max-w-5xl my-10 px-6 py-10 bg-gradient-to-tr from-blue/50 to-pink/50 rounded-xl text-gray-700 animate-g leading-relaxed">
        <p>
          Hi Sushi friends, thanks for taking the time to check, as a developer
          I couldn&apos;t just sent a pdf file to show my work and decided to go
          a little further and showcase some of the work I have been doing, most
          of the code repositories are not public and I not longer have access,
          but I will try to explain as much as possible each case.
        </p>
      </div>
      <div className="lg:max-w-5xl w-full mt-8 ">
        <Tabs
          defaultValue="case-1"
          className="w-full lg:grid grid-cols-12 items-start"
          orientation="vertical"
        >
          <TabsList className="flex w-full lg:flex-col flex-row col-span-3 lg:sticky top-1">
            <TabsTrigger value="case-1" className="flex flex-col">
              <span className="text-xs">Case 1</span>
              <span className="">Mantle delegates</span>
            </TabsTrigger>
            <TabsTrigger value="case-2">
              <span className="text-xs">Case 2</span>
              <span className="">Bonds</span>
            </TabsTrigger>
            <TabsTrigger value="case-3">
              <span className="text-xs">Case 3</span>
              <span className="">Treasury monitor</span>
            </TabsTrigger>
            <TabsTrigger value="case-4">
              <span className="text-xs">Case 4</span>
              <span className="">Mantle Landing page</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="case-1">
            <ProjectTitle title="Mantle delegates" />
            <Info>
              <a
                href="https://delegatevote.mantle.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Live app
              </a>
              <del>Repo</del>
            </Info>

            <ImagesCarousel>
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/delegates.png"
                alt="Delegates"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/delegates-tokens.png"
                alt="Delegates detail"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/delegates-profile.png"
                alt="Delegates profile"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
            </ImagesCarousel>

            <ProjectContent>
              <p>
                It is in short terms a governance DApp to managing delegations,
                which could sound too simple to be on top of this list, so I
                will proceed to explain it.
              </p>
              <p>
                We had a delegate App very simple I did for BitDAO, just
                consuming a subgraph with the token data (COMP) and displaying
                the connected power and list of top 10 delegates. So we wanted
                to do something better for Mantle, but stakeholders came with
                &quot;Just do the same of Optimism delegates&quot;. At that time
                the example to follow was a way too simple and with a different
                focus in stewards and we want to go more permissionless.
              </p>
              <p>
                Based on those arguments I proposed a better solution where
                people could create their own profiles, became a delegate and
                being able delegate to any address.
              </p>
              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                Mantle have a governance based on 3 tokens (MNT, MNT L2, BIT)
                which was the main challenge to solve, technically and in terms
                of UX for end users to understand. Instead of forcing the users
                to migrate all their BIT to MNT to be able to vote I decided to
                aggregate the 3 token data and we created an API to put the
                onchain data together and be able to setup a custom{" "}
                <a
                  href="https://snapshot.org/#/bitdao.eth/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue"
                >
                  snapshot strategy api
                </a>
                .
              </p>
              <p>
                To provide the data for snapshot and also for our delegates app,
                a solution, Supagraph, was created to index onchain data,
                similar to a supergraph but with a more simple stack, even
                possible to run inside a vercel project with an external mongodb
                and evm multichain compatible. Also with a{" "}
                <a
                  href="https://api.delegatevote.mantle.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue"
                >
                  playground
                </a>{" "}
                to facilitate work with the api, as others systems like
                &quot;mantle journey&quot; also needed this data.
              </p>
              <h3 className="text-2xl pt-4">Technology</h3>
              <div className="flex gap-3 flex-wrap">
                <Tag>Nextjs</Tag>
                <Tag>React</Tag>
                <Tag>Tailwind</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Supagraph*</Tag>
                <Tag>Wagmi</Tag>
                <Tag>Viem</Tag>
                <Tag>ConnectKit</Tag>
                <Tag>NextAuth</Tag>
              </div>
            </ProjectContent>
          </TabsContent>
          <TabsContent value="case-2">
            <ProjectTitle title="Bonds" />
            <Info>
              <a
                href="https://bonds-app.vercel.app/pools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Live app
              </a>
              <del>Repo</del>
            </Info>

            <ImagesCarousel>
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/bonds.png"
                alt="Bonds"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/bonds-app.png"
                alt="Bonds app"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/bonds-app-detail.png"
                alt="Bonds app detail"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
            </ImagesCarousel>

            <ProjectContent>
              <p>
                Bonds was a really interesting app to build, and was actually
                inspired by Sushi 😬, but Bonds was never run on mainnet, it
                started as &quot;bonds&quot; on the bull market and there were a
                lot of internal changes and bonds contracts were taking very
                long, after months there was a direction change and stakeholders
                asked also to add pools.
              </p>
              <p>
                Because all this conflict I proposed to the solidity team,
                stakeholders and pm to focus on pools first so we can have
                something out soon and stop delaying. The proposal was accepted
                and things started to work out, with the contract ready and most
                of the UI with mocked data, we did a subgraph and integrated to
                it, but the bear market came and there were already plans to
                rebrand BitDAO to Mantle so the project got deprecated before
                launch.
              </p>
              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                Out of managing all the project people to get something out, the
                most challenging part of the project was handling all the states
                of the pools based on the time, and connected wallet, as the
                business rules were complicated and we had to create different
                managing actions for the admins.
              </p>
            </ProjectContent>
          </TabsContent>
          <TabsContent value="case-3">
            <ProjectTitle title="Treasury monitor" />

            <Info>
              <a
                href="https://treasurymonitor.mantle.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Live app
              </a>
              <del>Repo</del>
            </Info>
            <ImagesCarousel>
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/treasury-monitor.png"
                alt="Treasury monitor"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/treasury-monitor-app.png"
                alt="Treasury monitor"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/treasury-monitor-tx.png"
                alt="Treasury monitor tx"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/treasury-monitor-details.png"
                alt="Treasury monitor detail"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
            </ImagesCarousel>

            <ProjectContent>
              <p>
                This project was really nice to build, the primary objective was
                to add more granular transparency to the treasury funds,and I
                build the first version fetching data from gnosis, but then
                stakeholders wanted more flexibility and be able even to add
                offchain movements. I decided to move it to a mongoDB as this
                project was a &quot;pet project&quot; and we were doing changes
                and pivoting it a few times.
              </p>

              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                A very important part of this project is the admin, where the
                user add transactions or edit in place, but also I build a
                custom bulk editor where admins can add multiple transactions,
                get a list of all onchain transactions of the treasury and pick
                the ones they want to add, export/import csv files as some of
                them wanted to work on the data on excel.
              </p>
              <p>
                Was very interesting to find ways to bring flexibility to handle
                the data but at the same time keeping all transparent for the
                community.
              </p>
              <p>
                For other side the user input transactions but we wanted to
                display a more financial analysis table, grouping data in a
                pivot table based on all those parameters was quite challenging,
                in terms of querying the DB using comples mongo aggregate but
                also designing it in a way that doesn&apos;t get too technical.
              </p>

              <p></p>
              <h3 className="text-2xl pt-4">Technology</h3>
              <div className="flex gap-3 flex-wrap">
                <Tag>Nextjs</Tag>
                <Tag>React</Tag>
                <Tag>Tailwind</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Wagmi</Tag>
                <Tag>Ethers</Tag>
                <Tag>RainbowKit</Tag>
                <Tag>NextAuth</Tag>
              </div>
            </ProjectContent>
          </TabsContent>

          <TabsContent value="case-4">
            <ProjectTitle title="Mantle Landing page" />

            <Info>
              <a
                href="https://www.mantle.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Live Site
              </a>
              <a
                href="https://github.com/mantle-xyz/api/blob/main/pages/api/v1/token-data/index.ts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Api Repo
              </a>
              <a
                href="https://api.mantle.xyz/playground"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Live Api Docs
              </a>
              <a
                href="https://api.mantle.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Live Swagger
              </a>
              <a
                href="https://api.mantle.xyz/api/graphql"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                GraphQL Endpoint
              </a>
            </Info>
            <ImagesCarousel>
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/mantle-l.png"
                alt="Mantle landing"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/mantle-l-treasury.png"
                alt="Mantle treasury"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
              <BlurImage
                className="snap-start object-cover lg:h-[360px]"
                src="/projects/mantle-l-token.png"
                alt="Mantle tokeconomics"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
              />
            </ImagesCarousel>

            <ProjectContent>
              <p>
                Mantle main site is a huge site and I was responsible for it and
                also to manage 2 persons working on it. The site goes from
                static data, to treasury values, tokeconomics and a blog form
                directus CMS.
              </p>
              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                For the web3 part of this site we can talk about the data layer
                of treasury and tokeconomics. This data was needed in different
                applications and requested by partners so I decided to create a
                public API to aggregate the different sources of data but also
                provide an easy way to consume the data via rest or GraphQL.
              </p>
              <p>
                Because Mantle have one of the biggest treasuries on the
                ecosystem, I had to consolidate the data from different sources
                into an easy way to use not only internally.
              </p>
              <p>
                As we were expected a lot of traffic the blog was a very
                important point of attention and after researching on many CMS I
                decided to use Directus self-hosted.
              </p>
              <p>
                To archive our needs on traffic I created the blog using ISR
                (incremental static regeneration), every change or new blog post
                a webhook is fired from directus (which also I setup and
                managed) to an internal NextJS api route which generate only the
                pieces requested and not the full site, keeping the best of both
                worlds static and automaticaly updated when marketing do
                changes.
              </p>
              <h3 className="text-2xl pt-4">Technology</h3>
              <div className="flex gap-3 flex-wrap">
                <Tag>Nextjs</Tag>
                <Tag>React</Tag>
                <Tag>Tailwind</Tag>
                <Tag>GraphQL</Tag>
                <Tag>Viem</Tag>
                <Tag>Alchemy</Tag>
                <Tag>directus</Tag>
              </div>
            </ProjectContent>
          </TabsContent>
        </Tabs>
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
