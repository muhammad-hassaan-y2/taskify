const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
 return (
     <div className="h-full bg-slate-100">

        {/* Footer Over here */}


        <main className="pt-40 pb-20 bg-slate-100">
        {children}
        </main>

         {/* Footer Over here */}

     </div>
 )
}

export default MarketingLayout