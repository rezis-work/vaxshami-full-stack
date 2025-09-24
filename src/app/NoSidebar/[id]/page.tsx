import { NoSidebarProps } from "@/app/interfaces/NoSidebarProps";

export default function NoSidebarPage({ params }: NoSidebarProps) {
  const id = params.id;
  return (
    <div className="w-full h-full flex items-start justify-center">
      <div className="w-full max-w-[823px] flex flex-col items-center justify-center">
        <div className="article flex flex-col items-center justify-center">
          <div className="featuredImageContainer flex flex-col gap-[20px] mb-[calc(10px*3)]">
            <nav className="fbt-breadcrumbs flex justify-start items-center gap-[10px]">
              <span>
                <a className="hover:text-[#6d62ff] cursor-pointer transition-all duration-300 ease-in-out">
                  Home
                </a>
              </span>
              <span className="text-[#888888]">/</span>
              <span>
                <a className="hover:text-[#6d62ff] cursor-pointer transition-all duration-300 ease-in-out">
                  Lifestyle
                </a>
              </span>
              <span className="text-[#888888]">/</span>
              <span>
                <a className="hover:text-[#6d62ff] cursor-pointer transition-all duration-300 ease-in-out">
                  People
                </a>
              </span>
              <span className="text-[#888888]">/</span>
              <span>
                <a className="text-[#888888]">
                  Duis tempor purus rutrum, tincidunt lacus.
                </a>
              </span>
            </nav>
            <div className="caption flex flex-col gap-[16px]">
              <h1 className="text-[38px] font-[1000]">
                Duis tempor purus rutrum, tincidunt lacus.
              </h1>
              <p className="post-excerpt font-[400] leading-normal text-[#333333] text-[17px] whitespace-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                facilisis leo et bibendum pretium. Suspendisse ligula neque,
                ultrices nec interdum faucibus, pharetra et liber…
              </p>
              <div className="item-post-meta w-full flex items-center justify-between">
                <div className="post-meta flex items-center justify-start gap-[10px]">
                  <span className="post-author flex items-center gap-[10px]">
                    <img
                      src={
                        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUwJEvB5Mgqp0tYkzUiMpRhiqWkNroc2SY2FeHq407yOB4H4G4R6p1CtyaRmETCxNO1nB0P4J9iPvb2wTCNQCCai4qougbQ2VwjHZAsCaYsbkN1YeBoddhdgMMaAAkNg/w25/avatar.jpg"
                      }
                      className="rounded-[200px]"
                    ></img>
                    <a className="font-[700] hover:text-[#6d62ff] transition-all duration-300 ease-in-out cursor-pointer">
                      John Doe
                    </a>
                    <div className="line h-[2px] w-[15px] bg-black"></div>
                  </span>
                  <span className="post-date">March 28, 2017</span>
                </div>
                <span className="read-time flex items-center gap-[5px] font-[400] text-[15px]">
                  <img
                    src={"/clock.png"}
                    className="font-[400] w-[15px] h-[15px]"
                  ></img>
                  <span>1 min read</span>
                </span>
              </div>
            </div>
            <div className=" pt-[30px] max-w-[100vw] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
              <img
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxDJL4IkGIw7s36TKu2Nieq1Dqtg4LcT-5O1V_SXskTR3lV3rPyjKDKnt1-yucqVBKf1D-2saQ1Y85CDhSROCt9A-3aX6tGMgccA9u0_k0nrbzmNPX_7AfquhWJuLcnO4ZECgGcCZWCKdr1OHuEmoU_WDmK2tMbMK-UYQAnArQCJ9FbwcKv3csWu6R2ks/w900/kate-trysh-CXYsPmtjxxk-unsplash-1000.webp"
                }
                className=" w-full object-cover object-center max-h-[576px]"
              ></img>
            </div>
          </div>
          <div className="post-body w-full">
            <div className="is-content font-[400] text-[17px] leading-[1.55] text-[#333333] whitespace-normal text-left break-words">
              <p className=" mb-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                facilisis leo et bibendum pretium. Suspendisse ligula neque,
                ultrices nec interdum faucibus, pharetra et libero. Vestibulum
                viverra molestie nunc. Sed quis aliquet leo. In vel posuere
                tortor. Donec eros turpis, dictum vel vehicula viverra,
                facilisis in mauris.
                <a className="font-bold underline cursor-pointer">
                  Nullam rhoncus enim ligula
                </a>
                , sit amet suscipit turpis dignissim non. Proin consequat purus
                sit amet blandit sollicitudin. Aliquam in consequat libero.
                Morbi sollicitudin dignissim erat laoreet interdum. Phasellus
                magna velit, consectetur iaculis tincidunt placerat, semper non
                sem. Mauris in eleifend libero.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-[25px]">
                <li>Praesent id aliquam eros, in semper est.</li>
                <li>
                  Donec facilisis leo et bibendum pretium.
                  <ul className="list-[circle] pl-6 space-y-1">
                    <li>Sed varius est ac nulla eleifend sagittis.</li>
                  </ul>
                </li>
                <li>Ut ac ultrices lectus, id volutpat nisi.</li>
                <li>Proin consequat purus sit amet blandit sollicitudin.</li>
              </ul>
              <h2 className="leading-[1.2] font-[700] text-[25px] mb-[25px]">
                The Power of Blogger Editor
              </h2>
              <p className="mb-[25px]">
                Donec facilisis leo et bibendum pretium. Suspendisse ligula
                neque, ultrices nec interdum faucibus, pharetra et libero.
                Vestibulum viverra molestie nunc.
                <s>Lorem ipsum dolor sit amet, consectetur adipiscing elit</s>.
                Donec eros turpis, dictum vel vehicula viverra, facilisis in
                mauris. Nullam rhoncus enim ligula, sit amet suscipit turpis
                dignissim non. Phasellus deserunt. Convallis perspiciatis fusce
                fermentum accumsan, arcu aliquam, velit venenatis augue proin,
                enim etiam dolor. Aenean ipsum augue, mollis at sodales mollis,
                varius eu erat.
              </p>
              <blockquote>
                <div className="bg-[#f1f4f9] p-[3rem]">
                  <p>
                    Proin consequat purus sit amet blandit sollicitudin. Aliquam
                    in consequat libero. Morbi sollicitudin dignissim erat
                    laoreet interdum. Phasellus magna velit, consectetur iaculis
                    tincidunt placerat, semper non sem.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
