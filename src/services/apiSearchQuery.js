import supabase from "./supabase"


//Erhalte alle Daten aus der DB
export async function getSearchQuery() {
    const { data, error } = await supabase.from('search_queries').select('*');
    if (error) {
        console.log(error);
        throw new Error("Standesamt Daten konnten nicht geladen werden.");
    }
    return data;
}

// Füge neuen Eintrag in DB hinzu
export async function addSearchQuery(newQuery) {
    const { data, error } = await supabase.from('search_queries').insert([newQuery]).select();
    if (error) {
        console.log(error);
        throw new Error("Neue Suchanfrage konnte nicht hinzugefügt werden.");
    }
    return data;
}
