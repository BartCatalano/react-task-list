

function App() {

  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed"
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed"
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed"
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed"
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog"
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress"
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog"
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress"
    }
  ];


  //array di oggetti con stato complete
  const ListaComplete = tasks.filter((curtask) => curtask.state === 'completed');

  // array di oggetti con stato diverso da complete
  const secondList = tasks.filter((curtask) => curtask.state !== `completed`);


  // creo la funzione per la nuova lista completed tramite map

  const listCompletePrint = () => {
    return ListaComplete.map((task) =>
      <li key={task.id} className="listCol">
        <div> <strong>{task.title}</strong> <span className="tagState">{task.state}</span></div>
        <p>Priority: {task.priority}</p>
        <p>est. Timer {task.estimatedTime}</p>
      </li>);
  }

  // creo la funzione per la nuova lista non completed tramite map

  const secondListPrint = () => {
    return secondList.map((task) =>
      <li key={task.id} className="listCol">
        <div> <strong>{task.title}</strong> <span className="tagState">{task.state}</span></div>
        <p>Priority: {task.priority}</p>
        <p>est. Timer {task.estimatedTime}</p>
      </li>);
  }


  return (
    <>
      <h1 className="backgroundTitle">Task Manager</h1>
      
        <h2 className="listCol">Current Tasks ({secondList.length})</h2> 
        <ul>
          {secondListPrint()}
        </ul>
    

      <hr />
      <h2 className="listCol">Complete Task ({ListaComplete.length}) </h2>
      <ul>{listCompletePrint()}</ul>

    </>
  )
}

export default App
