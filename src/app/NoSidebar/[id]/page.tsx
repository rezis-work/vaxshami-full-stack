import Card from "@/app/components/card-component/Card";
import CardGallery from "@/app/components/card-gallery-component/CardGallery";
import { CardProps } from "@/app/interfaces/CardProps";
import { NoSidebarProps } from "@/app/interfaces/NoSidebarProps";

export default function NoSidebarPage({ params }: NoSidebarProps) {
  const id = params.id;
  let cards: CardProps[] = [
    {
      Id: 1,
      Title: "Business",
      Image: "/img1.jpg",
      Text: "Some text here asdasdasd as da sd a s d as d asda sd",
      Date: "2025-09-24",
      type: 2,
    },
    {
      Id: 2,
      Title: "Business",
      Image: "/img2.jpg",
      Text: "Some text here",
      Date: "2025-09-24",
      type: 2,
    },
    {
      Id: 3,
      Title: "Business",
      Image: "/img3.jpeg",
      Text: "Some text here",
      Date: "2025-09-24",
      type: 2,
    },
    {
      Id: 4,
      Title: "Business",
      Image: "/img4.jpeg",
      Text: "Some text here",
      Date: "2025-09-24",
      type: 2,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-x-hidden px-[15px]">
        <div className="w-full max-w-[823px] max-[1365px]:max-w-[730px] max-[1200px]:max-w-[609px] max-[767px]:max-w-[510px] max-[575px]:max-w-[823px] flex flex-col items-center justify-center mb-[25px]">
          <div className="article flex flex-col items-center justify-center mb-[25px]">
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
                  <span className="read-time flex items-center gap-[5px] font-[400] text-[15px] max-[575px]:hidden">
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
                  className=" w-full object-cover object-center max-h-[576px] align-middle"
                ></img>
              </div>
            </div>
            <div className="post-body w-full mb-[25px]">
              <div className="is-content font-[400] text-[17px] leading-[1.55] text-[#333333] whitespace-normal text-left break-words">
                <p className=" mb-[25px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  facilisis leo et bibendum pretium. Suspendisse ligula neque,
                  ultrices nec interdum faucibus, pharetra et libero. Vestibulum
                  viverra molestie nunc. Sed quis aliquet leo. In vel posuere
                  tortor. Donec eros turpis, dictum vel vehicula viverra,
                  facilisis in mauris.
                  <a className="font-bold underline cursor-pointer hover:text-[#6d62ff] transition-all duration-300">
                    Nullam rhoncus enim ligula
                  </a>
                  , sit amet suscipit turpis dignissim non. Proin consequat
                  purus sit amet blandit sollicitudin. Aliquam in consequat
                  libero. Morbi sollicitudin dignissim erat laoreet interdum.
                  Phasellus magna velit, consectetur iaculis tincidunt placerat,
                  semper non sem. Mauris in eleifend libero.
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
                  <s>Lorem ipsum dolor sit amet, consectetur adipiscing elit</s>
                  . Donec eros turpis, dictum vel vehicula viverra, facilisis in
                  mauris. Nullam rhoncus enim ligula, sit amet suscipit turpis
                  dignissim non. Phasellus deserunt. Convallis perspiciatis
                  fusce fermentum accumsan, arcu aliquam, velit venenatis augue
                  proin, enim etiam dolor. Aenean ipsum augue, mollis at sodales
                  mollis, varius eu erat.
                </p>
                <blockquote className="relative mb-[25px]">
                  <div className="bg-[#f1f4f9] p-[3rem] flex items-start justify-center gap-[10px]">
                    <img src={"/quotes.png"} className="w-[150px]"></img>
                    <p className="text-black font-[700] text-[20px]">
                      Proin consequat purus sit amet blandit sollicitudin.
                      Aliquam in consequat libero. Morbi sollicitudin dignissim
                      erat laoreet interdum. Phasellus magna velit, consectetur
                      iaculis tincidunt placerat, semper non sem.
                    </p>
                  </div>
                </blockquote>
                <p className="mb-[25px]">
                  <i>
                    <u className="underline">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </u>
                    Donec facilisis leo et bibendum pretium. Suspendisse ligula
                    neque, ultrices nec interdum faucibus, pharetra et libero.
                    Vestibulum viverra molestie nunc. Sed quis aliquet leo. In
                    vel posuere tortor. Donec eros turpis, dictum vel vehicula
                    viverra, facilisis in mauris. Praesent id aliquam eros, in
                    semper est.
                  </i>
                </p>
                <p className="mb-[25px]">
                  <b>
                    <span>
                      Aenean pellentesque magna ut nibh lobortis, sit amet
                      vulputate sem tristique.
                    </span>
                  </b>
                  Ut ac ultrices lectus, id volutpat nisi. Aenean ipsum augue,
                  mollis at sodales mollis, varius eu erat. Fusce accumsan
                  rhoncus risus non feugiat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Donec facilisis leo et bibendum
                  pretium. Suspendisse ligula neque, ultrices nec interdum
                  faucibus, pharetra et libero. Vestibulum viverra molestie
                  nunc.
                  <span className="bg-[#b5838d] text-white">
                    Sed quis aliquet leo. In vel posuere tortor.
                  </span>
                  Donec eros turpis, dictum vel vehicula viverra, facilisis in
                  mauris. Nullam rhoncus enim ligula, sit amet suscipit turpis
                  dignissim non.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={
                      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2khcgtJ8RTbzKE6zKerbDTc4ycaBlkVXjO3k8p98FtsKwc056BPGczEDVU9J_T8bLec4_K0tM9E6gkGEPEkRnrWKjf-1LrQDvmU1Nh3OCmUdlzaFmshLZ1kIK4aEa5ifgUmcx-ClEz2W-kA_RJzT-Hcz6ThyQuSZYizlB6PHYdEWdc-WtrCVn5iwF/w640-h427/single-1-min.jpg"
                    }
                    className="mb-[10px] rounded-[4px]"
                  ></img>
                  <span className="text-[12px] text-black mb-[25px]">
                    Image by{" "}
                    <a className="underline hover:text-[#6d62ff] transition-all duration-300 font-bold cursor-pointer">
                      Freepik
                    </a>
                  </span>
                </div>
                <p>
                  Proin consequat purus sit amet blandit sollicitudin. Aliquam
                  in consequat libero. Morbi sollicitudin dignissim erat laoreet
                  interdum. Phasellus magna velit, consectetur iaculis tincidunt
                  placerat, semper non sem. Mauris in eleifend libero. Mauris
                  vitae nibh sed felis aliquet dictum sed egestas mauris. Sed
                  varius est ac nulla eleifend sagittis. Praesent id aliquam
                  eros, in semper est. Maecenas ex enim, ornare ac auctor sit
                  amet, interdum et justo. Aenean pellentesque magna ut nibh
                  lobortis, sit amet vulputate sem tristique. Ut ac ultrices
                  lectus, id volutpat nisi. Aenean ipsum augue, mollis at
                  sodales mollis, varius eu erat.
                </p>
              </div>
            </div>
            <div className="post-footer w-full flex flex-col gap-[15px]">
              <div className="row flex flex-col items-start justify-center gap-[25px]">
                <div className="red-line bg-[#ff607d] w-[50px] h-[3px]"></div>
                <div className="tags flex items-center justify-start gap-[10px]">
                  <span className="text-[16px] flex items-center gap-[3px] font-[200]">
                    <img src={"/tag.png"} className="w-[16px] h-[16px]"></img>
                    Tags:
                  </span>
                  <span className="font-[700] flex gap-[5px]">
                    <a className="cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-[#6366F1] bg-gradient-to-r from-[#6366F1] to-[#6366F1] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_2px]">
                      Lifestyle,
                    </a>
                    <a className="cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-[#6366F1] bg-gradient-to-r from-[#6366F1] to-[#6366F1] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_2px]">
                      People
                    </a>
                  </span>
                </div>
                <div className="share-box w-full border border-[#eeeeee] p-[15px] flex items-center justify-between max-[480px]:justify-center">
                  <div className="share1 flex items-center justify-center gap-[10px] max-[480px]:hidden flex-wrap">
                    <img
                      src="/share.png"
                      className="w-[22.5px] h-[21px] font-[700] cursor-pointer"
                    />
                    <span className="font-[700] cursor-pointer">Share</span>
                  </div>
                  <div className="share2 flex items-center justify-center gap-[8px] flex-wrap">
                    <img
                      src={"/facebook.png"}
                      className="w-[32px] h-[32px] cursor-pointer"
                    ></img>
                    <img
                      src={"/twitter.png"}
                      className="w-[32px] h-[32px] cursor-pointer"
                    ></img>
                    <img
                      src={"/whatsapp.png"}
                      className="w-[32px] h-[32px] cursor-pointer"
                    ></img>
                    <img
                      src={"/linkedin.png"}
                      className="w-[32px] h-[32px] cursor-pointer"
                    ></img>
                    <img
                      src={"/pinterest.png"}
                      className="w-[32px] h-[32px] cursor-pointer"
                    ></img>
                    <span className="w-[32px] h-[32px] cursor-pointer flex items-center justify-center bg-[#676869] text-white">
                      <img
                        src={"/gmail.png"}
                        className="w-[16px] h-[16px] cursor-pointer"
                      ></img>
                    </span>
                  </div>
                </div>
                <div className="fbt-item-post-pager pb-[10px] w-full flex items-start justify-between gap-[30px] max-[768px]:flex-col min-[768px]:border-b min-[768px]:border-[#eeeeee]">
                  <div className="previous pb-[30px] flex flex-col gap-[15px] max-w-[50%] text-left max-[768px]:max-w-[100%] max-[768px]:w-full  max-[768px]:border-b max-[768px]:border-[#eeeeee]">
                    <strong className="cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-[#6366F1]">
                      {"< Newer"}
                    </strong>
                    <div className="relative">
                      <span className="entry-link leading-[1.2] font-[500] text-[18px] cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-[#6366F1] bg-gradient-to-r from-[#6366F1] to-[#6366F1] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_2px]">
                        Creative pretty photography ideas from smart devices
                      </span>
                    </div>
                  </div>
                  <div className="next pb-[30px] flex flex-col max-w-[50%] gap-[15px] text-right max-[768px]:max-w-[100%] max-[768px]:w-full max-[768px]:border-b max-[768px]:border-[#eeeeee]">
                    <strong className="cursor-pointer text-right transition-all duration-[400ms] ease-in-out hover:text-[#6366F1]">
                      {"older >"}
                    </strong>
                    <div className="relative flex items-center justify-center">
                      <span className="entry-link leading-[1.2] font-[500] text-[18px] text-right cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-[#6366F1] bg-gradient-to-r from-[#6366F1] to-[#6366F1] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_2px]">
                        Corporate Workflow make a difference.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[25px]">
        <CardGallery cards={cards} theme="light"></CardGallery>
      </div>
    </div>
  );
}
