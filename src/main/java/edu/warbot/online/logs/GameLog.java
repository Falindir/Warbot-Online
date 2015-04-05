package edu.warbot.online.logs;

import edu.warbot.agents.ControllableWarAgent;
import edu.warbot.agents.WarAgent;
import edu.warbot.online.logs.entity.EntityLog;

import java.util.*;

/**
 * Created by beugnon on 04/04/15.
 *
 * Cette classe stocke les associations de données à partir de l'évolution d'un agent
 * par rapport à son "tick" précédent pour donner uniquement
 * le nécessaire à envoyer au client
 * @author beugnon
 */
public class GameLog
{

    /**
     * Association entre nom (identifiant) et une instance d'EntityLog
     */
    Map<String,EntityLog> entityLog;

    public Map<String,EntityLog> getEntityLog() {
        return entityLog;
    }

    /**
     * Constructeur vide
     */
    public GameLog()
    {
        entityLog = new TreeMap<>();
    }

    /**
     * Teste si l'agent est déjà ajouté à la liste
     * @param agent
     * @return Vrai si et seulement si l'agent possède une instance d'EntityLog qui s'occupe de sa gestion des données
     */
    public boolean contains(ControllableWarAgent agent)
    {
        return getEntityLog().containsKey(agent.getName());
    }


    /**
     *
     * @param agent
     * @return
     */
    public Map<String,Object> updateControllableAgent(ControllableWarAgent agent)
    {
        Map<String,Object> map;
        EntityLog el2 = getEntityLog().get(agent.getName());

        //Elément exact mise-à-jour
        map = el2.update(agent);

        //Vérification de la mort de l'agent
        if(el2.isDead())
            getEntityLog().remove(el2);//Nettoyage de l'arbre

        return map;
    }

    /**
     *
     * @param agent l'agent que l'on souhaite ajouter aux entités
     * @return l'association de création pour les messages du réseau
     */
    public Map<String,Object> addControllableAgent(ControllableWarAgent agent)
    {
        //Add ajout d'une nouvelle instance pour un nouvel agent
        EntityLog el = new EntityLog(agent.getName());
        getEntityLog().put(agent.getName(),el);
        return el.update(agent);
    }

    /**
     *
     * @param agent l'agent que l'on souhaite ajouter ou mettre à jour
     * @return l'association de mise-à-jour pour les messages du réseau
     */
    public Map<String,Object> addOrUpdateEntity(WarAgent agent)
    {
        return null;
    }

    /**
     * Permet de resynchroniser en récupérant toutes les données des agents actifs
     * @return une collection d'associations correspondant aux données de chaque agent
     */
    public Collection<Map<String,Object>> getSynchronisationEntities()
    {
        Collection<Map<String,Object>> collection = new ArrayList<>();

        for(EntityLog el : getEntityLog().values())
            collection.add(el.getCurrentState());

        return collection;
    }


    /**
     *
     * @param agent
     * @return
     */
    public Map<String, Object> addOrUpdateControllableEntity(ControllableWarAgent agent) {
        return (contains(agent)) ? updateControllableAgent(agent) : addControllableAgent(agent);
    }
}
