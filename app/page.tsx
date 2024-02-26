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
          {/* Mantle delegates */}
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
                In brief, I developed a governance DApp for managing
                delegations, which may sound overly simplistic to top this list.
                Let me explain further.
              </p>
              <p>
                Previously, I created a basic delegate app for BitDAO that
                consumed a subgraph with token data (COMP) and displayed the
                connected power along with the top 10 delegates. For Mantle, we
                aimed to improve upon this simple model. However, stakeholders
                requested a similar approach to Optimism&apos;s delegates. At
                the time, the example to follow was too basic and focused on
                stewards, whereas we wanted a more permissionless system.
              </p>
              <p>
                Considering these factors, I proposed a more advanced solution
                that enables users to create profiles, become delegates, and
                delegate to any address.
              </p>
              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                Mantle&apos;s governance is based on three tokens (MNT, MNT L2,
                BIT), which presented a significant challenge in terms of
                technical implementation and user experience. Instead of forcing
                users to migrate all their BIT to MNT for voting purposes, I
                decided to aggregate data from all three tokens. To achieve
                this, we created an API that combines on-chain data and allows
                for a custom{" "}
                <a
                  href="https://snapshot.org/#/bitdao.eth/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue"
                >
                  snapshot strategy API setup
                </a>
                .
              </p>
              <p>
                To provide data for both snapshot and our delegates app, we
                developed Supagraph. This solution indexes on-chain data and is
                similar to a supergraph but with a simpler stack. It can run
                inside a Vercel project with an external MongoDB, and it&apos;s
                compatible with EVM multichain. Additionally, Supagraph features
                a{" "}
                <a
                  href="https://api.delegatevote.mantle.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue"
                >
                  playground
                </a>{" "}
                to facilitate API usage, as other systems like &quot;mantle
                journey&quot; also require this data.
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
          {/* Bonds */}
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
                The Bonds app was an intriguing project to work on, and it was
                initially inspired by Sushi. However, Bonds never made it to
                mainnet. The project began as &quot;bonds&quot; during a bull
                market, but it faced numerous internal changes and delays in
                developing the bonds contracts. After months of setbacks,
                stakeholders requested the addition of pools to the project
                scope.
              </p>
              <p>
                Due to these conflicts, I proposed to the Solidity team,
                stakeholders, and project manager that we prioritize pools to
                expedite the release and avoid further delays. My proposal was
                accepted, and progress was made with the contract and UI
                development using mocked data. We also created a subgraph and
                integrated it into the project. Unfortunately, the bear market
                arrived, and plans to rebrand BitDAO to Mantle led to the
                deprecation of the project before its launch.
              </p>
              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                The primary challenge of the project, aside from managing the
                team and stakeholders, was handling the various states of the
                pools based on pool times and connected wallet. The business
                rules were complex, and we had to develop different management
                actions for admins to address these intricacies.
              </p>
              <h3 className="text-2xl pt-4">Technology</h3>
              <div className="flex gap-3 flex-wrap">
                <Tag>Nextjs</Tag>
                <Tag>React</Tag>
                <Tag>Tailwind</Tag>
                <Tag>Subgraph</Tag>
                <Tag>Wagmi</Tag>
                <Tag>Ethers</Tag>
                <Tag>NextAuth</Tag>
              </div>
            </ProjectContent>
          </TabsContent>
          {/* Treasury monitor */}
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
                This project was an enjoyable undertaking, with the primary
                objective of providing more granular transparency to treasury
                funds. I initially built the first version by fetching data from
                Gnosis. However, stakeholders expressed a desire for greater
                flexibility, including the ability to add off-chain movements.
                To accommodate these requirements, I decided to migrate the data
                to a MongoDB, as this project underwent multiple changes and
                pivots.
              </p>

              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                A critical component of this project is the admin interface,
                where users can add transactions or edit them in place. I also
                developed a custom bulk editor allowing admins to add multiple
                transactions, select specific on-chain transactions to include,
                and export/import CSV files for easier data manipulation in
                Excel. Balancing flexibility with transparency for the community
                was an interesting challenge.
              </p>
              <p>
                On the user side, inputting transactions was straightforward,
                but we aimed to present a more financial analysis-focused table.
                Grouping data in a pivot table based on various parameters
                proved challenging in terms of querying the database using
                complex MongoDB aggregate functions. Additionally, designing the
                table in a user-friendly manner that wasn&apos;t overly
                technical presented its own set of challenges.
              </p>
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
          {/* Mantle Landing page */}
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
                I was responsible for managing the development of Mantle&apos;s
                main site, including overseeing the work of two team members.
                The site features a range of content, from static data and
                treasury values to tokenomics and a blog powered by Directus
                CMS.
              </p>
              <h3 className="text-2xl pt-4">Challenge</h3>
              <p>
                For the web3 component of the site, we focused on the data layer
                for treasury and tokenomics. This data was required for various
                applications and requested by partners, so I decided to create a
                public API. The API aggregates different data sources and
                provides an accessible way to consume the data via REST or
                GraphQL.
              </p>
              <p>
                Given that Mantle has one of the largest treasuries in the
                ecosystem, consolidating data from various sources into a
                user-friendly format was essential, not only for internal use
                but also for external partners.
              </p>
              <p>
                The blog was a crucial aspect of the site, as we anticipated
                high traffic volumes. After evaluating numerous CMS options, I
                opted for a self-hosted Directus instance. To accommodate our
                traffic requirements, I built the blog using Incremental Static
                Regeneration (ISR). Whenever a change or new blog post occurs, a
                webhook is triggered from Directus to an internal Next.js API
                route. This route generates only the requested pieces, rather
                than the full site, ensuring optimal performance while
                maintaining automatic updates when changes are made by the
                marketing team.
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
