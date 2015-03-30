package edu.warbot.repository;

import edu.warbot.models.Party;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;

/**
 * Created by BEUGNON on 18/03/2015.
 *
 * @author Sébastien Beugnon
 */
@Repository
@Transactional(readOnly = true)
public class PartyRepository {
    @PersistenceContext
    private EntityManager entityManager;


    @Transactional
    public Party save(Party party)
    {
        entityManager.persist(party);
        return party;
    }

    public Party findByName(String name) {
        try {
            return entityManager.createNamedQuery(Party.FIND_BY_NAME, Party.class)
                    .setParameter("name", name)
                    .getSingleResult();
        } catch (PersistenceException e) {
            return null;
        }
    }

}
