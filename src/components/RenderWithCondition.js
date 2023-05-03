export default function RenderWithCondition({flag})
{
    return flag && (<div>
        It render due to flag.
    </div>);
}