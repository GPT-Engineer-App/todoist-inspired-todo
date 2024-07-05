import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/modal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState(["Inbox", "Today", "Upcoming"]);
  const [newTask, setNewTask] = useState({ title: "", dueDate: "", project: "Inbox" });

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", dueDate: "", project: "Inbox" });
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <Modal>
          <ModalTrigger asChild>
            <Button>Add Task</Button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Add New Task</ModalTitle>
            </ModalHeader>
            <div className="flex flex-col gap-4 p-4">
              <Label htmlFor="task-title">Title</Label>
              <Input
                id="task-title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
              <Label htmlFor="task-due-date">Due Date</Label>
              <Input
                id="task-due-date"
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              />
              <Label htmlFor="task-project">Project</Label>
              <Select
                value={newTask.project}
                onValueChange={(value) => setNewTask({ ...newTask, project: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project} value={project}>
                      {project}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={addTask}>Add Task</Button>
            </div>
          </ModalContent>
        </Modal>
      </header>
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Due Date: {task.dueDate}</p>
              <p>Project: {task.project}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;