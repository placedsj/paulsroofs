import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Project } from './crew-hub';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Users, ClipboardList, Wrench, Archive, MessageSquare, Clock, Calendar, CheckSquare } from 'lucide-react';


interface ProjectCardProps {
  project: Project;
  onAddChatMessage: (projectId: string, message: string) => void;
  onAddTimeLog: (projectId: string, log: string) => void;
}

export function ProjectCard({ project, onAddChatMessage, onAddTimeLog }: ProjectCardProps) {
    const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem('chat-message') as HTMLInputElement;
        const message = input.value.trim();
        if (message) {
            onAddChatMessage(project.id, message);
            form.reset();
        }
    };

    const handleTimeLogSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem('time-log-entry') as HTMLInputElement;
        const log = input.value.trim();
        if (log) {
            onAddTimeLog(project.id, log);
            form.reset();
        }
    };
    
  return (
    <Card className="w-full max-w-6xl mx-auto bg-zinc-800 border-zinc-700 text-zinc-50 overflow-hidden">
      <CardHeader className="bg-zinc-900/50 p-6">
        <CardTitle className="text-3xl font-bold text-orange-500 flex items-center justify-between">
            <span>{project.address}</span>
            <Badge variant="outline" className={`text-base ${project.status === 'In Progress' ? 'text-green-400 border-green-400' : 'text-yellow-400 border-yellow-400'}`}>
                {project.status}
            </Badge>
        </CardTitle>
        <CardDescription className="text-zinc-400 pt-1">
            Job Site: {project.jobSite}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
            {/* Project Details */}
            <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center"><Users className="mr-3 h-6 w-6 text-orange-500" /> On-Site Crew</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg space-y-3">
                    <p><span className="font-semibold text-zinc-300">Foreman:</span> {project.foreman}</p>
                    <div>
                        <span className="font-semibold text-zinc-300">Crew:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.crew.map(member => <Badge key={member} variant="secondary">{member}</Badge>)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tasks */}
             <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center"><ClipboardList className="mr-3 h-6 w-6 text-orange-500" /> Today's Tasks</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        {project.dailyTasks.map((task, index) => <li key={index}>{task}</li>)}
                    </ul>
                </div>
            </div>

            {/* Tools */}
            <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center"><Wrench className="mr-3 h-6 w-6 text-orange-500" /> Required Tools</h3>
                 <div className="bg-zinc-700/50 p-4 rounded-lg">
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => <Badge key={tool} variant="outline" className="text-zinc-300 border-zinc-500">{tool}</Badge>)}
                    </div>
                </div>
            </div>

            {/* Leftover Materials */}
            <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center"><Archive className="mr-3 h-6 w-6 text-orange-500" /> Material Leftovers</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                     {project.materialLeftover.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {project.materialLeftover.map(material => <Badge key={material} variant="outline" className="text-zinc-300 border-zinc-500">{material}</Badge>)}
                        </div>
                     ) : (
                        <p className="text-zinc-400 italic">No leftover materials logged.</p>
                     )}
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
            {/* Daily Check-in & Chat */}
            <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center"><MessageSquare className="mr-3 h-6 w-6 text-orange-500" /> Daily Chat</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                    <div className="h-48 overflow-y-auto mb-4 space-y-4 pr-2">
                        {project.chatMessages.map(msg => (
                            <div key={msg.id} className="flex items-start gap-2.5">
                                 <Avatar className="h-8 w-8">
                                    <AvatarFallback>{msg.user.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col w-full max-w-[320px] leading-1.5">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="text-sm font-semibold text-zinc-100">{msg.user}</span>
                                        <span className="text-xs font-normal text-zinc-500">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                    <p className="text-sm font-normal py-2 text-zinc-300">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleChatSubmit} className="flex items-center gap-2">
                        <Input name="chat-message" placeholder="Type your message..." className="bg-zinc-800 border-zinc-600 text-zinc-50" />
                        <Button type="submit" variant="default" className="bg-orange-600 hover:bg-orange-700 text-white">Send</Button>
                    </form>
                </div>
            </div>
            
            {/* Time & Progress */}
            <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center"><Clock className="mr-3 h-6 w-6 text-orange-500" /> Time & Progress</h3>
                <div className="bg-zinc-700/50 p-4 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-zinc-300">
                           <Calendar className="mr-2 h-5 w-5" />
                           <span className="font-semibold">Project ETA:</span>
                        </div>
                        <span className="font-bold text-lg text-white">{project.eta}</span>
                    </div>
                    <Separator className="bg-zinc-600"/>
                     <div className="h-32 overflow-y-auto space-y-2 pr-2">
                         {project.timeLogs.map(log => (
                            <div key={log.id} className="text-sm text-zinc-400 flex items-center">
                               <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                               <span>**{new Date(log.timestamp).toLocaleDateString()}**: {log.entry}</span>
                            </div>
                        ))}
                     </div>
                    <form onSubmit={handleTimeLogSubmit} className="flex items-center gap-2">
                        <Input name="time-log-entry" placeholder="Log time, e.g., '8 hours - Framing'" className="bg-zinc-800 border-zinc-600 text-zinc-50"/>
                        <Button type="submit" variant="outline" className="text-zinc-300 border-zinc-600 hover:bg-zinc-700 hover:text-white">Log Time</Button>
                    </form>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
