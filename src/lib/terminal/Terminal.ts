interface Command {
    name: String;
    args: CommandParam[]|undefined,

}
interface CommandParam{
    id: String,

}
export default class Terminal{
    cmds?: Command[];
    
}