import {
    Actor,
    HttpAgent
} from '@dfinity/agent';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fetch = require('node-fetch');


const idlFactory = ({ IDL }) => {
    return IDL.Service({
        graphql_query: IDL.Func([IDL.Text, IDL.Text], [IDL.Text], ['query']),
        graphql_mutation: IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
        graphql_mutation_custom: IDL.Func([IDL.Text, IDL.Text], [IDL.Text], [])
    });
};

const agent = new HttpAgent({
    fetch,
    host:"https://boundary.ic0.app" //"http://127.0.0.1:8000" //"https://boundary.ic0.app" //local replica url if local dev
});

const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId:"uqklt-lyaaa-aaaai-aajqa-cai" //'uqklt-lyaaa-aaaai-aajqa-cai'//for prod //rrkah-fqaaa-aaaaa-aaaaq-cai for local dev
});







async function getPOIs(tag,place,num) {
    const result = await actor.graphql_query(`
    query{
        readPointOfInterest(
                    search: {${tag}: {contains: "${place}"}}
                          limit: ${num}
                          offset: 0
                          order: {id: ASC}
        ) {
          id name phone opening_hours private_or_public lat lon
        }
      }
    `, JSON.stringify({}));

    const resultJSON = JSON.parse(result);

    const pois = resultJSON.data.readPointOfInterest;

    return pois;
}



async function getNodes(tag,string,limit) {
    const result = await actor.graphql_query(`
    query {
        readNode(
                        search: {${tag}: {contains: "${string}"}}
                        limit: ${limit}
                        offset: 0
                        order: {id: ASC}
      ) { lat lon tags id  }
    }
    
    `, JSON.stringify({}));

    const resultJSON = JSON.parse(result);

    const nodes = resultJSON.data.readNode;

    return nodes;
}


async function getBuildings(tag,place,num) {
    const result = await actor.graphql_query(`
    query{
        readBuilding(
                    search: {${tag}: {contains: "${place}"}}
                          limit: ${num}
                          offset: 0
                          order: {id: ASC}
        ) {
        id name phone opening_hours private_or_public website
        }
      }
    `, JSON.stringify({}));

    const resultJSON = JSON.parse(result);

    const buildings = resultJSON.data.readBuilding;

    return buildings;
}




console.log(await getBuildings("name","building",1));
//console.log(await getPOIs("name","childcare",1));
//console.log(await getNodes("lat", "24.54543",1));



