export default function Header(){
  return (
    // TODO: use Shadcn Avatar
    <header className="bg-red-600 text-white p-4 flex justify-end items-center w-full">
      
      <div className="flex items-center gap-4 mr-4">
        <span>FEBRIAN REZKI HEMETO</span>
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
   )
}