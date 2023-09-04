import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve('models', 'contacts', 'contacts.json');
const updateContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
};

export const getContactById = async (contactId) => {
  const contacts = await getAllContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  if (result === -1) {
    return null;
  }
  return result;
};

export const removeContact = async (contactId) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

export const addContact = async ({ name, email, phone }) => {
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  const contacts = await getAllContacts();
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateContact = async (id, body) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { ...contacts[index], ...body };
  await updateContacts(contacts);
  return contacts[index];
};

export default {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
