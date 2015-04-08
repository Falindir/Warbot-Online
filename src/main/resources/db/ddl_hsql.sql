
    create table ACCOUNT (
        id bigint generated by default as identity (start with 1),
        account_email varchar(255),
        account_firstname varchar(255) not null,
        account_inscriptionDate timestamp,
        account_activated boolean not null,
        account_premium boolean not null,
        account_lastConnectionDate timestamp,
        account_lastname varchar(255) not null,
        account_password varchar(255) not null,
        account_expirationDate timestamp,
        account_role varchar(255),
        account_screenname varchar(255) not null,
        primary key (id)
    );

    create table ACCOUNT_PARTY (
        members_id bigint not null,
        teams_id bigint not null,
        primary key (members_id, teams_id)
    );

    create table AGENT (
        id bigint generated by default as identity (start with 1),
        agent_isActivated boolean,
        agent_isPremium boolean,
        agent_WarType integer,
        primary key (id)
    );

    create table CODE (
        id bigint generated by default as identity (start with 1),
        code_content varchar(255),
        code_lastModification timestamp,
        agent_id bigint,
        party_id bigint,
        primary key (id)
    );

    create table GAME_RESULT (
        id bigint generated by default as identity (start with 1),
        launchDate timestamp,
        result integer,
        launcher_id bigint,
        target_id bigint,
        primary key (id)
    );

    create table PARTY (
        id bigint generated by default as identity (start with 1),
        party_creationDate timestamp,
        party_elo integer,
        party_language integer,
        party_name varchar(255),
        creator_id bigint,
        primary key (id)
    );

    alter table ACCOUNT 
        add constraint UK_jkd9cix86ciqqcm6do9odr3h7  unique (account_email);

    alter table ACCOUNT 
        add constraint UK_f4lc6mbyr2oahgta5npnx74l  unique (account_screenname);

    alter table PARTY 
        add constraint UK_6f9crrkedyvu40ib31ca4s3w3  unique (party_name);

    alter table ACCOUNT_PARTY 
        add constraint FK_thjxm36muk6f3mwrvppsv00r4 
        foreign key (teams_id) 
        references PARTY;

    alter table ACCOUNT_PARTY 
        add constraint FK_8yp9nyvbnahs7errjtnixjfyn 
        foreign key (members_id) 
        references ACCOUNT;

    alter table CODE 
        add constraint FK_mav01bmkm1harefpd70s7bq9t 
        foreign key (agent_id) 
        references AGENT;

    alter table CODE 
        add constraint FK_sqfwawkmgtqmb67r2my477avv 
        foreign key (party_id) 
        references PARTY;

    alter table GAME_RESULT 
        add constraint FK_87rk070220uwpuedpv0vqp15j 
        foreign key (launcher_id) 
        references PARTY;

    alter table GAME_RESULT 
        add constraint FK_85jd2unk78ho98edhsk26cesg 
        foreign key (target_id) 
        references PARTY;

    alter table PARTY 
        add constraint FK_k1774sand3ceowkyfblvuhp2v 
        foreign key (creator_id) 
        references ACCOUNT;
