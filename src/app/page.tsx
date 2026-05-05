import TopAppBar from "./components/TopAppBar";
import SideNavBar from "./components/SideNavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TopAppBar />

      {/* Main Layout */}
      <div className="flex pt-16 min-h-screen">
        <SideNavBar />

        {/* Main Content Area */}
        <main className="flex-1 ml-0 md:ml-[80px] lg:ml-[260px] p-6 lg:p-8 max-w-container_max_width w-full mx-auto">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-2">
                Live Now
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Top broadcasts recommended for you
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface font-label-md border border-outline-variant hover:bg-surface-bright transition-colors">
                Categories
              </button>
              <button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface font-label-md border border-outline-variant hover:bg-surface-bright transition-colors flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="filter_list"
                >
                  filter_list
                </span>{" "}
                Filter
              </button>
            </div>
          </div>

          {/* Bento Grid Layout for Streams */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Featured Stream */}
            <Link href="/live" className="md:col-span-2 xl:col-span-2 group relative rounded-xl overflow-hidden bg-surface-container border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 block cursor-pointer">
              <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
                <img
                  alt="Featured Stream Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK5Q8PHoha2zFGgrSQoGwH2KzpvzZssxn7Wy75_t6it8etk9tPd3RUgdjXqhBv2NZCoGB4SVrxzw4iwZ8GWkP31yKuhToh6TE-o5dVDAtsb910EGAZCultG0qkTyUewaErKLMlh2PAAc2WkMSZKlyoEho6o7BV4nQCJnd0ehzZVEk9cqnNFfzB6SV5Gj1NfHLYZ-mkCs3golcM_zKWx9q33EdSJfVFKOioBoTttnFLAp0BoZvcF-EGo714bKqcqdkLumFqB2P71Hs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none"></div>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-error text-on-error font-label-sm px-2 py-1 rounded flex items-center gap-1 uppercase tracking-wider font-bold shadow-lg shadow-error/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-error animate-pulse"></span>{" "}
                    Live
                  </span>
                  <span className="bg-surface-container-highest/80 backdrop-blur-md text-on-surface font-label-sm px-2 py-1 rounded flex items-center gap-1 border border-white/10">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      data-icon="visibility"
                    >
                      visibility
                    </span>{" "}
                    124.5k
                  </span>
                </div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 z-10 flex gap-4 items-start">
                <img
                  alt="Channel avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-surface-container-lowest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfyRcYx_Ppmw852iL_lRiXu7r4HEO0ORDWRKFCEmFuKaKZRyPvn2T_SyEXjWc2f9ZAWsbCfrOUB1GN49xjK3bDmpF30z8RDWLECGSEy1U-kQanY8r_ghgyyzFIImoAXro6OmhLMteIXX3Oa2nCQAAN_onn4rEwO7wSQhubZmCQHndVbx5ubo7t-RSRVT9goNpE3-RiaWD8Ah0gP6BkbBshxmUilKIkhQnIWQMlv6QAx4Nn2TeSjtck8Ssx1zgxg-B9vsVJIoxhL68"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline-md text-headline-md text-on-surface truncate group-hover:text-primary transition-colors drop-shadow-md">
                    Grand Finals - World Championship 2024
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant truncate">
                    E-Sports Central
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-surface-container-highest/80 backdrop-blur-md text-on-surface-variant font-label-sm px-2 py-0.5 rounded-full border border-white/5 text-xs">
                      Competitive
                    </span>
                    <span className="bg-surface-container-highest/80 backdrop-blur-md text-on-surface-variant font-label-sm px-2 py-0.5 rounded-full border border-white/5 text-xs">
                      Tournament
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Standard Stream Card 1 */}
            <div className="group relative rounded-xl overflow-hidden bg-surface-container border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
                <img
                  alt="Stream Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_vPbtDl9pDapFc-jPOmWQNvwO6pNx2u3_hTfULjU61lcCZlTfhdwPUcZLlP23LegcGRDvmqWJ4XTvES7oJoOWxqM98cTM4hxbWkhtWvaPJcNOmRHfZXUKs1rKTAQooPqYD6JqG_jcl5T0wW56r1peXxAA3z9Sf-L3QLhWfsUoEffIznD0tRM-Zd_XcPc9niC-mKdrKQ4NPaEiYs_zQ6AbtFbuwSI9aDUyu7c96VXoQQJ7Rq6p4ITozb-LSTrdZmO1yqLMExP21mE"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-error text-on-error font-label-sm px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider font-bold text-xs shadow-lg shadow-error/20">
                    <span className="w-1 h-1 rounded-full bg-on-error animate-pulse"></span>{" "}
                    Live
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-sm px-1.5 py-0.5 rounded flex items-center gap-1 border border-white/10 text-xs">
                    <span
                      className="material-symbols-outlined text-[12px]"
                      data-icon="person"
                    >
                      person
                    </span>{" "}
                    15.2k
                  </span>
                </div>
              </div>
              <div className="p-4 flex gap-3 items-start flex-1 bg-surface-container-lowest/50">
                <img
                  alt="Channel avatar"
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdFSXdX7aofQgLthCo7MD6p17P3o3JYH4rKoeDFzFpEL96OOUvC8BmjSh4D0nogIL2un1b4uRj86CZrSSAijtw9QI9xWdxCK-lHHj_l3ay6Qu1WXcevdI5FglcTYGA6gXfoKeNPmt9EUZikA1XhIrfrfQgZvrBJvXzh08KR9fqAEfxsv7lQjf1yhmytH5rElhpfeAATA4y5Rw6Iv0iYpLFl57g1bzk3sv2lMEHw4qMFPL4BmLOnWNd_odWdHigD4uAxDwMcxRBHTE"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-md text-label-md text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    Late Night Synthwave Mix &amp; Chill
                  </h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                    DJ_Nova
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="bg-surface-container-highest text-on-surface-variant font-label-sm px-2 py-0.5 rounded border border-white/5 text-[10px] uppercase">
                      Music
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Stream Card 2 */}
            <div className="group relative rounded-xl overflow-hidden bg-surface-container border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
                <img
                  alt="Stream Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA3jbFnGiCa8s_AMDrnrJou7fXTA6adcXBBcXi6-xxxIbl7JgdZudfH7CGega0-eXzjEf-TkGR_D6e1UkKJGRMgznbPffPIHSUMF33gk8Yz2txlYhY5CdEklw8SXTvjylcfZQVdTtB_aPZMXsSuStu2eNoqI5QcOU-d5Rit4DWBv6fvxhAhUirZP1nEJrunyjKHMoT-20q2kUPOE9kYhLJnjv_v4AHhpb5qM9B8hPxwN88nhureUGfQdQObd03Lq1IyrpqLGekGUc"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-error text-on-error font-label-sm px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider font-bold text-xs shadow-lg shadow-error/20">
                    <span className="w-1 h-1 rounded-full bg-on-error animate-pulse"></span>{" "}
                    Live
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-sm px-1.5 py-0.5 rounded flex items-center gap-1 border border-white/10 text-xs">
                    <span
                      className="material-symbols-outlined text-[12px]"
                      data-icon="person"
                    >
                      person
                    </span>{" "}
                    8.9k
                  </span>
                </div>
              </div>
              <div className="p-4 flex gap-3 items-start flex-1 bg-surface-container-lowest/50">
                <img
                  alt="Channel avatar"
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6QdjatpBcMVjmDQ0QMpdbLDO2eJ2cYGpvNsPbR3pseGFvIV34RHcOTnpUJGrsmeFm0ZoT4b4fVcF-BEB3dDt6BVP4KSuDsiRW9NgPq4M0AUKA6TTOJUOL_g-4w-_wFhVED4O63HGDLrgmhSg4WX-iAx-goPcXg0_fDgRIFshsAA1FYGaU4jwwooXDWM9pqjsATqW01yqu9VctRttvyfHgMDVhu2ux5WAjfHtwTPzBI7MS2kWmJGXtM7_wKnXcKYVg-PAwVvIiHNs"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-md text-label-md text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    Retro Speedruns - Breaking Records!
                  </h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                    SpeedDemon
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="bg-surface-container-highest text-on-surface-variant font-label-sm px-2 py-0.5 rounded border border-white/5 text-[10px] uppercase">
                      Retro
                    </span>
                    <span className="bg-surface-container-highest text-on-surface-variant font-label-sm px-2 py-0.5 rounded border border-white/5 text-[10px] uppercase">
                      Speedrun
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Stream Card 3 */}
            <div className="group relative rounded-xl overflow-hidden bg-surface-container border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
                <img
                  alt="Stream Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqHS9RCGBSGZHUjouslYaqXr2kSa-TF-EKQ84Vufc1qT7T4nqwZPqBhK_u07TVe-_L9uU8LxbT_9wz59ohIqsAAgQvW6FFa2tSxyfBUqpFAWdUo-eqzsJoclBYcSmoZPtsk7J0psFYEpiRmYogEXhBOweLI4THJPMi1NbHcXSyW6ISr-D4vXL6VTbjK6pclO_by8inZpEwqCM8r10xviBwqruD8QlLS-ddTog2zTqpNZ6QMG2oFIKkDYeyuxUTEhWMZN4bHXcmmnY"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-error text-on-error font-label-sm px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider font-bold text-xs shadow-lg shadow-error/20">
                    <span className="w-1 h-1 rounded-full bg-on-error animate-pulse"></span>{" "}
                    Live
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-sm px-1.5 py-0.5 rounded flex items-center gap-1 border border-white/10 text-xs">
                    <span
                      className="material-symbols-outlined text-[12px]"
                      data-icon="person"
                    >
                      person
                    </span>{" "}
                    3.4k
                  </span>
                </div>
              </div>
              <div className="p-4 flex gap-3 items-start flex-1 bg-surface-container-lowest/50">
                <img
                  alt="Channel avatar"
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZFTfDM-hXqFjPMSccazO0A3VyygoQ2S46i-u7KbN-rjU9b8kcdCcFhBlzYMCBe0cQJ-cykP69t3p7wQHm_3gIAsg6ckUDV2Kjr6iN_3P7Ko4hobZrOdPhAiZH2KHCP_LUiwBtVLhAuTLG4N6FARYs2fjj4b4uytxymtRPbwj_ri0VGyZm2NLs_VPJa9FUOTMwHCzN0U_HFL7NkkNxV-n8FRHDQVUo3NrFAuswuU-E2dbT9jjSHd2lTNYG3jWKTykjDG9GVKMsBPo"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-md text-label-md text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    Learning Blender 3D - Character Sculpting
                  </h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                    PolyArt
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="bg-surface-container-highest text-on-surface-variant font-label-sm px-2 py-0.5 rounded border border-white/5 text-[10px] uppercase">
                      Creative
                    </span>
                    <span className="bg-surface-container-highest text-on-surface-variant font-label-sm px-2 py-0.5 rounded border border-white/5 text-[10px] uppercase">
                      3D Art
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}