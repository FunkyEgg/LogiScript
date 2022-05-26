#include <fstream>

#include "file.h"
#include "common.h"

namespace termite::lang
{
	File::File(std::string fileLocation)
	{
		m_FileLocation = fileLocation;
		m_FileContents;
		m_FileLines;

		Init();
	}

	File::~File() {}

	void File::Init()
	{
		std::ifstream ifs(m_FileLocation);
		std::string fileContents((std::istreambuf_iterator<char>(ifs)),
			(std::istreambuf_iterator<char>()));

		m_FileContents = fileContents;
	}
}