import Link from "next/link";

export type AnnouncementCardPropType = {
  courseName: string;
  uploaderName: string;
  uploaderPosition: string;
  uploadDate: number
}

export default function AnnouncementCard({courseName, uploaderName, uploadDate, uploaderPosition}: AnnouncementCardPropType){
  return (
      <div className="border-b pb-2">
        <Link href={"#"} className="text-green-600 font-bold">
          {`[${courseName}]`}
        </Link>
        <p>
          Oleh:{" "}
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
            ${uploaderPosition}
          </span>{" "}
          - {uploaderName}
        </p>
        <p className="text-sm">{uploadDate}</p>
    </div>
  )
}