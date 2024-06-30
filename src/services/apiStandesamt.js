import supabase from "./supabase"

//Alle Daten aus DB
export async function getStandesamtData() {
    const { data, error } = await supabase.from('standesamt').select('*');
    if (error) {
        console.log(error);
        throw new Error("Standesamt Daten konnten nicht geladen werden.");
    }
    return data;
}

//Daten anhand einer ID erhalten
export async function getStandesamtDataById(id) {
    const { data, error } = await supabase.from('standesamt').select('*').eq('id', id);
    if (error) {
        console.log(error);
        throw new Error("Standesamt Daten konnten nicht geladen werden.");
    }
    return data;
}


//Füge neuen Eintrag hinzu
export async function addStandesamtData(newEntry) {
    const { data, error } = await supabase.from('standesamt').insert([newEntry]).select();
    if (error) {
        console.log(error);
        throw new Error("Neuer Standesamt Eintrag konnte nicht hinzugefügt werden.");
    }
    return data;
}
