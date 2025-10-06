"use client";

import React, { useState, useCallback } from 'react';
import { ProjectCard } from './project-card';
import { Header } from './header';
import { Footer } from './footer';

export type Project = {
  id: string;
  address: string;
  jobSite: string;
  foreman: string;
  crew: string[];
  status: 'In Progress' | 'Upcoming' | 'Completed';
  dailyTasks: string[];
  chatMessages: { id: string; user: string; text: string; timestamp: string }[];
  timeLogs: { id: string; entry: string; timestamp: string }[];
  eta: string;
  tools: string[];
  materialLeftover: string[];
};

const initialProjects: Project[] = [
  {
    id: 'proj-123',
    address: '123 Main Street, Quispamsis',
    jobSite: 'The Anderson Residence',
    foreman: 'Paul',
    crew: ['John D.', 'Mike L.', 'Steve P.'],
    status: 'In Progress',
    dailyTasks: [
      'Complete tear-off of old shingles.',
      'Install ice and water shield on all eaves.',
      'Begin installation of metal panels on north side.',
    ],
    chatMessages: [
        { id: 'msg1', user: 'Paul', text: 'Morning crew. Let\'s aim to get the north side done by EOD. Supplies are on site.', timestamp: new Date(Date.now() - 3600000).toISOString() },
        { id: 'msg2', user: 'John D.', text: 'Copy that. Weather looks good today.', timestamp: new Date(Date.now() - 3540000).toISOString() },
    ],
    timeLogs: [
        { id: 'log1', entry: '8 hours - Tear-off and prep', timestamp: new Date(Date.now() - 86400000).toISOString() },
    ],
    eta: '3 Days',
    tools: ['Impact Driver', 'Metal Shears', 'Scaffolding', 'Safety Harnesses', 'Ladders'],
    materialLeftover: ['1/2 box of screws', '3 extra panels'],
  },
   {
    id: 'proj-456',
    address: '456 Riverview Drive, Rothesay',
    jobSite: 'The Garcia Project',
    foreman: 'Dave',
    crew: ['Matt G.', 'Chris B.'],
    status: 'Upcoming',
    dailyTasks: ['Site prep and material drop-off scheduled for tomorrow.'],
    chatMessages: [],
    timeLogs: [],
    eta: 'Est. 5 Days',
    tools: ['Ladders', 'Safety Harnesses'],
    materialLeftover: [],
  },
];

export function CrewHub() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleAddChatMessage = useCallback((projectId: string, message: string) => {
    setProjects(prevProjects =>
      prevProjects.map(p => {
        if (p.id === projectId) {
          const newMessage = {
            id: `msg${Date.now()}`,
            user: 'Foreman', // This would be the current logged-in user
            text: message,
            timestamp: new Date().toISOString(),
          };
          return { ...p, chatMessages: [...p.chatMessages, newMessage] };
        }
        return p;
      })
    );
  }, []);

  const handleAddTimeLog = useCallback((projectId: string, log: string) => {
    setProjects(prevProjects =>
      prevProjects.map(p => {
        if (p.id === projectId) {
            const newLog = {
                id: `log${Date.now()}`,
                entry: log,
                timestamp: new Date().toISOString()
            };
          return { ...p, timeLogs: [...p.timeLogs, newLog] };
        }
        return p;
      })
    );
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col">
      <Header />
      <main className="flex-grow py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-50">Crew Hub</h1>
            <p className="mt-4 text-lg text-zinc-400">Live job site overview for all active projects.</p>
          </div>
          <div className="space-y-12">
            {projects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onAddChatMessage={handleAddChatMessage}
                onAddTimeLog={handleAddTimeLog}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
