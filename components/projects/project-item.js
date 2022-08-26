import Image from "next/dist/client/image";

export default function ProjectItem({data}) {
  const title = data.properties.Name.title[0].plain_text;
  const desc = data.properties.Description.rich_text[0].plain_text;
  const githubLink = data.properties.Github.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calcPeriod = (start, end)=>{
    const startDateStringArr = start.split('-');
    const endDateStringArr = end.split('-');

    var startDate = new Date(startDateStringArr[0], startDateStringArr[1], startDateStringArr[2])
    var endDate = new Date(endDateStringArr[0], endDateStringArr[1], endDateStringArr[2])

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result
  }

  return (
    <div className="project-card">
      <Image  
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{desc}</h3>
        <a href={githubLink}>깃허브 바로가기</a>
        <p className="my-1">
          작업기간 : {start} ~ {end} ({calcPeriod(start, end)}일)
        </p>

        <div className="flex items-start mt-2">
          {tags.map((aTag)=> (
            <h1 key={aTag.id} className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30">{aTag.name}</h1>
          ))}
        </div>
      </div>
    </div>
  )
}